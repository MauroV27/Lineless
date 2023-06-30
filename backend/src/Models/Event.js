import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore';

import * as Validater from '../Utils/validateData.js';

export class EventDAO {

    async create( eventData ){

        if ( Validater.isStringValue(eventData.name) || Validater.isExpectedArray(eventData.organizers, 1) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }
        
        const eventConstructor = {
            name : eventData.name,
            description : Validater.convertEmptyValueToString(eventData.description),
            organizers : eventData.organizers,
            sellers : Validater.changeUnknownValueToArray(eventData.sellersList),
            products : Validater.changeUnknownValueToArray(eventData.productList)
        }

        const db = new ConnectDB();
        const eventRef = collection(db, 'events');

        const result = await addDoc(eventRef, eventConstructor)
            .then( doc => {
                const data = {...doc.data(), id: doc.id}

                return { data, status: 'OK', message : "Success in create event" }
            })
            .catch( (error => {
                return { data : null, status : 'ERROR', message : error }
            })
        );

        return result;
    }

    async update( eventID, eventUpdateData ){
        // [TODO] : not implemented 
    }

    async getAllOngoigEvents(){
        const db = new ConnectDB();

        const eventsCollection = collection(db, 'events');
        const eventSnap = await getDocs( eventsCollection );
        // [ISSUE] : This code get ALL events, without filter...
        const eventsList = eventSnap.docs.map( doc => { return {...doc.data(), id: doc.id} });

        return eventsList;
    }

    async getEvent( eventID ){

        const db = new ConnectDB();

        const eventRef = doc(db, "events", eventID);
        const eventSnap = await getDoc(eventRef);

        if ( eventSnap.exists() ){
            return eventSnap.data();
        }

        return null;
    }

}