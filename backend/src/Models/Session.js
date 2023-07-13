import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore';

import { isStringValue } from '../Utils/validateData.js';

/**
 * Manager user sessions with firebase (firestore)
 */
export class SessionDAO {

    async addUserSession(userID){
        // Call this when user login
        if ( isStringValue( userID) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const sessionTime = Date.now() + ( 30 * 3600000 ); // 3600000 (milisec) = 60 (min) = 60 * 60 (secs)

        const userSession = {
            user_id : userID,
            time_limit : sessionTime
        }
        
        const db = new ConnectDB();
        const sessionRef = collection(db, 'sessions');
        
        const result = await addDoc(sessionRef, userSession)
            .then( doc => {
                const data = {userSession, sessionID: doc.id};

                return { data, status: 'OK', message : "Success in create session" }
            })
            .catch( (error => {
                return { data : null, status : 'ERROR', message : error }
            })
        );
        
        return result;
    }

    async getUserSession( sessionID ){
        // Call this method when user has cookies relateds with apps 
        if ( isStringValue( sessionID) ){
            return {data:null, status:"ERROR", message: "Data entry failure"};
        }

        const db = new ConnectDB();

        const sessionRef = doc(db, "sessions", sessionID);
        const sessionSnap = await getDoc( sessionRef );

        if ( sessionSnap.exists() ){
            // const data = sessionSnap.data();

            return {data:sessionSnap.data(), status:"OK", message:"Get session"};
        }
        
        return {data:null, status:"ERROR", message:"Session not found"};
    }

    async deleteUserSession(){
        // Call this method when user make a logout
        // [TODO] : needs to be implemented
    }

}