import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc, arrayUnion, where } from 'firebase/firestore';

import * as Validater from '../Utils/validateData.js';

export class EventDAO {

    async create( name, description, organizer, sellers, products ){

        if ( Validater.isStringValue(name) || Validater.isStringValue(organizer) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }
        
        const eventConstructor = {
            name : name,
            description : Validater.convertEmptyValueToString(description),
            organizers : organizer,
            sellers : Validater.changeUnknownValueToArray(sellers),
            products : Validater.changeUnknownValueToArray(products),
            state : "ongoing"
        }

        const db = new ConnectDB();
        const eventRef = collection(db, 'events');

        const result = await addDoc(eventRef, eventConstructor).then( doc => {
                const data = {id: doc.id, ...eventConstructor };

                return { data, status: 'OK', message : "Success in create event" }
            })
            .catch( (error => {
                return { data : null, status : 'ERROR', message : "|-" + error }
            }));
        
        // console.log( "event result: ", result);
        return result;
    }

    async update( eventID, eventUpdateData ){
        // [TODO] : not implemented 
    }

    async getAllOngoigEvents(){
        const db = new ConnectDB();
        const eventsRef = collection(db, "events");

        const eventList = query( eventsRef,  where('state', '==', "ongoing") );
        const eventsSnap = await getDocs(eventList);

        if ( eventsSnap.empty ){ 
            return {data:null, status:"ERROR", message:"Not found onogoing events"};
        }

        const events = []

        eventsSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            events.push( {id: doc.id, data:doc.data()} );
        });

        return { data: events, status: 'OK', message : "Success in get events" }
    }

    async getEvent( eventID ){

        if ( Validater.isStringValue(eventID) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const db = new ConnectDB();

        const eventRef = doc(db, "events", eventID);
        const eventSnap = await getDoc(eventRef);

        if ( eventSnap.exists() ){
            return { data:eventSnap.data(), status: 'OK', message : "Success in get event" }
        }

        return {data:null, status:"ERROR", message: "Event not found"};
    }


    async addProduct( eventID, productID ){

        if ( Validater.isStringValue(eventID) || Validater.isStringValue(productID)){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const db = new ConnectDB();

        const eventRef = doc(db, "events", eventID);
        const eventSnap = await getDoc(eventRef);

        if ( eventSnap.exists() == false ){
            return {data:null, message:"Event not found", status:"ERROR"};
        }

        const result = await updateDoc(eventRef, {
            products: arrayUnion(productID)
        })
            .then( docRef => {
                return {data: [...eventSnap.data().products, productID], status:"OK", message:"Success in update event product list"}
            })
            .catch( error => {
                if ( error?.message ){
                    return {data:null, status:"ERROR", message:"Failed in update event product list"}
                }
        })
        
        return result;
    }

    async addSeller(eventID, sellerID ){

        if ( Validater.isStringValue(eventID) || Validater.isStringValue(sellerID)){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const db = new ConnectDB();

        const eventRef = doc(db, "events", eventID);
        const eventSnap = await getDoc(eventRef);

        if ( eventSnap.exists() == false ){
            return {data:null, message:"Event not found", status:"ERROR"};
        }

        const result = await updateDoc(eventRef, {
            sellers: arrayUnion(sellerID)
        })
            .then( docRef => {
                return {data: [...eventSnap.data().sellers, sellerID], status:"OK", message:"Success in update event sellers list"}
            })
            .catch( error => {
                if ( error?.message ){
                    return {data:null, status:"ERROR", message:"Failed in update event product list"}
                }
        })
        
        return result;
    }

}