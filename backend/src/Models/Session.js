import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore/lite';

/**
 * Manager user sessions with firebase (firestore)
 */
export class SessionDAO {

    async addUserSession(){
        // Call this when user login
        // [TODO] : needs to be implemented
    }

    async getUserSession(){
        // Call this method when user has cookies relateds with apps
        // [TODO] : needs to be implemented
    }

    async deleteUserSession(){
        // Call this method when user make a logout
        // [TODO] : needs to be implemented
    }

}