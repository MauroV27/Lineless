import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore/lite';

export class ProductDAO {

    async create( productData, eventID ){

        const productConstructor = {
            "name" : productData.name,
            "price" : productData.price,
            "description" : productData.description,
            "event_id" : eventID
            // "image_link": null // not implemented in MVP
        };

        const db = new ConnectDB();

        const productRef = collection(db, 'products');

        const result = await addDoc(productRef, productConstructor)
            .then( doc => {
                const data = { name: doc.name, price: doc.price, description: doc.description, id: doc.id }

                return { data, status: 'OK', message : "Success in create product" }
            })
            .catch( (error => {
                return { data : null, status : 'ERROR', message : error }
            })
        );

        return result;
    }

    /**
     * Receive a list of products and return all products data
     * @param {[ String ]} productsIDList 
     * @returns {[ Product ]}
     */
    async getAllProductsInEvent( productsIDList ){

        const productList = [];

        for ( let productID of productsIDList){
            const product = await this.getProduct( productID );

            if ( product != null ){
                productList.push(product);
            }
        }

        return productList;

    }

    async getProduct( productID ){
        const db = new ConnectDB();

        const productRef = doc(db, 'products', productID);
        const productSnap = await getDoc(productRef);

        if ( productSnap.exists() ){
            return productSnap.data();
        }

        return null;
    }

    async updateProduct(){
        // [TODO]
    } 

    async removeProduct(){
        // [TODO]
    }

}