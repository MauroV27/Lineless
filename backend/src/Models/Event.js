import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore/lite';

export class EventDAO {

    async create( eventData ){
        // [TODO] : Not complete yet

        const eventConstructor = {
            "name" : eventData.name,
            "description" : eventData.description,
            "organizers" : eventData.organizers,
            "sellers" : eventData.sellers
        }

        const db = new ConnectDB();
        const eventRef = collection(db, 'events');

        const result = await addDoc(eventRef, eventConstructor)
            .then( doc => {
                const data = {name: doc.name, id: doc.id}

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

        const eventRef = doc(db, 'events', eventID);
        const eventSnap = await getDoc(eventRef);

        if ( eventSnap.exists() ){
            return eventSnap.data();
        }

        return null;

    }

}