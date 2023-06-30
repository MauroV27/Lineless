import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore';

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
            products : Validater.changeUnknownValueToArray(products)
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
        
        console.log( "event result: ", result);
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

        if ( Validater.isStringValue(eventID) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const db = new ConnectDB();

        const eventRef = doc(db, "events", eventID);
        const eventSnap = await getDoc(eventRef);

        if ( eventSnap.exists() ){
            return eventSnap.data();
        }

        return null;
    }

}