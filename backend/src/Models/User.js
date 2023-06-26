import { ConnectDB } from '../DB/connectDB.js';
import { collection, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore/lite';

export class UserDAO {

    async create( userData ){
        
        if ( this.#checkInputText(userData.username) || this.#checkInputText(userData.password) || this.#checkInputText(userData.email) || this.#checkInputText(userData.name) ) {
            return { data: null, status: 'ERROR', message: "Data entry failure" };
        }

        const db = new ConnectDB();

        const userConstructor = {
            username : userData.username,
            password : await this.#hashPassword(userData.password),
            email    : userData.email,
            name     : userData.name
        }

        this.#checkUserExists(userConstructor.username, userConstructor.email, db)
            .then((exists) => {
                if (exists) {
                    return { data : null, status : 'ERROR', message : "User already exists!" }
                }
            })
            .catch((error) => {
                console.error('Erro ao verificar usuário:', error);
            });

        const userRef = collection(db, 'users');
        const result = await addDoc(userRef, userConstructor)
            .then( doc => {
                const data = {name: doc.name, email: doc.email, username: doc.username, userID: doc.id}

                return { data, status: 'OK', message : "Success in create event" }
            })
            .catch( (error => {
                return { data : null, status : 'ERROR', message : error }
            })
        );

        // [TODO] : Implemented - Create a session for user after OK with register account

        return result;
    }

    async update( userDataToUpdate ){
        // [TODO] : needs to be implemented
    }

    /**
     * Validate login data ( username, password, userID)
     * @param {Object} loginData 
     * @returns {boolean}
     */
    async validateLogin( loginData ){
        // [TODO] : needs to be implemented
        const { username, password, email } = loginData;

        if ( this.#checkInputText( password) || this.#checkInputText( email) || this.#checkInputText( username) ) {
            return { data : null, status : 'ERROR', message : "Data entry failure" };
        }

        const db = new ConnectDB();

        const userRef = collection(db, 'users');
        const userSnap = await getDoc(userRef);

        if ( userSnap.exists() == false ){
            return { data : null, status : 'ERROR', message : "User not found!" };
        }

        const userData = userSnap.data();

        if ( userData.password == null || userData.password == undefined || userData.password == "" ){
            return { data : null, status : 'ERROR', message : "Faill to load data" };
        }

        const passwordIsValid = await this.#comparePassword( password, userData.password );
        return passwordIsValid;
    }

    async delete( userAccountToDelete ){
        // [TODO] : needs to be implemented
    }

    // Private methods ----------------------------------------

    // Private methods to access database

    async #checkUserExists( username, email, db ){
        // const db = new ConnectDB();

        const usersRef = db.collection('users');
        const querySnapshot = await usersRef
          .where('name', '==', username)
          .where('email', '==', email)
          .get();
      
        return !querySnapshot.empty;
    }

    // Private methods for validate data

    async #hashPassword( password ){
        // [TODO] : Impelemtent hash function
        return password;
    }
    
    async #comparePassword(password, hash) {
        // [TODO] : Impelemtent compare function
        return password == hash;
    }

    #checkInputText( inputData ){
        return inputData == "" || inputData == null || inputData == undefined
    }

}