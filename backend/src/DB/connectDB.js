import dotenv from 'dotenv';
dotenv.config()

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = JSON.parse( process.env.FIREBASE_SERVICE_ACCOUNT_KEY );

/** Singleton that connect server API with firestore */
export class ConnectDB {

    // _instance = null;

    constructor() {
        return this.getConnection();
    }

    getConnection() {
        if ( !ConnectDB.instance ) {
            try {
                
                const app = initializeApp(firebaseConfig);
                const db = getFirestore(app);

                ConnectDB.instance = db;

            } catch (err) {
                console.log("[ERROR] : Failed to connect with firebase service");
                throw err;
            }
        }

        return ConnectDB.instance;
    }
}