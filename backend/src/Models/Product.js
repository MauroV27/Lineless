import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore';

import { isStringValue, isExpectedArray, isPositiveNumber } from '../Utils/validateData.js';

export class ProductDAO {

    async create( productData, eventID ){

        if ( isStringValue(productData.name) || isStringValue(productData.description) || !isPositiveNumber(productData.price) || isStringValue(eventID) || isStringValue(productData.seller) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const productConstructor = {
            "name" : productData.name,
            "price" : productData.price,
            "description" : productData.description,
            "seller_id" : productData.seller,
            "event_id" : eventID
            // "image_link": null // not implemented in MVP
        };

        const db = new ConnectDB();

        const productRef = collection(db, 'products');

        const result = await addDoc(productRef, productConstructor)
            .then( doc => {
                const data = { ...productConstructor, id: doc.id }

                return { data, status: 'OK', message : "Success in create product" }
            })
            .catch( (error => {
                if ( error?.message != null ){
                    return { data : null, status : 'ERROR', message : error.message }
                }
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

        // if ( isExpectedArray(productsIDList) ){
        //     return { data:null, status:"ERROR", message:"Data entry failure" };
        // }

        const productList = [];

        for ( let productID of productsIDList){
            const product = await this.getProduct( productID );

            if ( product.data != null ){
                productList.push({...product.data, id:productID});
            }
        }
        // console.log("get all products: ", productList);
        return productList;

    }

    async getProduct( productID ){
        if ( isStringValue(productID) ){
            return { data:null, status:"ERROR", message:"Data entry failure" };
        }

        const db = new ConnectDB();

        const productRef = doc(db, 'products', productID);
        const productSnap = await getDoc(productRef);

        if ( productSnap.exists() ){
            const data = productSnap.data()
            // console.log("get product get data: ", data)
            return { data, status:"OK", message:"Success in get product data" };
        }

        return { data:null, status:"ERROR", message:"Product not found"};
    }

    async updateProduct(){
        // [TODO]
    } 

    async removeProduct(){
        // [TODO]
    }

}