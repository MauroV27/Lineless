import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc, where } from 'firebase/firestore';

export class OrderDAO {

    async create( userID, productIDPriceList, eventID, sellerID){
        const orderConstructor = {
            user_id : userID,
            seller_id : sellerID,
            product_list : productIDPriceList,
            event_id : eventID,
            status : {
                ordered : Date.now(),
                ready   : null,
                received: null
            }            
        };

        const db = new ConnectDB();

        const orderRef = collection(db, 'orders');

        const result = await addDoc(orderRef, orderConstructor)
            .then( doc => {
                const data = { id: doc.id, ...orderConstructor };

                return { data, status: 'OK', message : "Success in create order" }
            })
            .catch( (error => {
                return { data : null, status : 'ERROR', message : error }
            })
        );

        return result;
    }


    async getOrder( orderID ){
        if ( isStringValue(orderID) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const db = new ConnectDB();

        const orderRef = doc(db, "orders", orderID);
        const orderSnap = await getDoc(orderRef);

        if ( orderSnap.exists() ){
            return {data:orderSnap.data(), status:"OK", message: "Sucess to get order"};
        }

        return {data:null, status:"ERROR", message: "Failed to load order data"};;
    }

    async getAllOrders(sellerID, eventID){
        const db = new ConnectDB();
        const ordersRef = collection(db, "orders");

        const existEventSeller = query( ordersRef, 
            where('event_id', '==', eventID),
            where('seller_id', '==', sellerID)
            );
        const sellerEventSnap = await getDocs(existEventSeller);

        if ( sellerEventSnap.empty ){ //|| userEmailSnap.empty == false){
            return {data:null, status:"ERROR", message:"Not found event or seller"};
        }

        const orders = []

        sellerEventSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            orders.push( {id: doc.id, data:doc.data()} );
          });

          return { data: orders, status: 'OK', message : "Success in get orders" }
    }

    async orderReady( orderID ){
        return this.updateOrderStatus( orderID, "ready")
    }

    async orderReceived( orderID ){
        return this.updateOrderStatus( orderID, "received")
    }

    async updateOrderStatus( orderID, statusType ){
        // need be testes 
        const db = new ConnectDB();

        const orderRef = doc(db, 'orders', orderID);
        const orderSnap = await getDoc(orderRef);
      
        if ( orderSnap.exists() ) {
          const currentStatus = orderSnap.data().status;
      
          // Verifica se o tipo de status fornecido existe no objeto status atual
          if (currentStatus.hasOwnProperty(statusType)) {
            // Cria um objeto de atualização somente para o campo de status fornecido
            const updateData = {};
            updateData[`status.${statusType}`] = Date.now();
      
            return await orderSnap.update(updateData);
            // console.log(`Campo ${statusType} atualizado com sucesso.`);
          } else {
            // console.log(`O campo de status ${statusType} não existe.`);
            return null;
          }
        } else {
        //   console.log('Documento não encontrado.');
            return null;
        }
    }
}