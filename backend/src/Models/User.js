import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore/lite';

export class UserDAO {

    async create( userData ){
        // [TODO] : needs to be implemented
    }

    async update( userDataToUpdate ){
        // [TODO] : needs to be implemented
    }

    async validateLogin( loginData ){
        // [TODO] : needs to be implemented
    }

    async delete( userAccountToDelete ){
        // [TODO] : needs to be implemented
    }

}