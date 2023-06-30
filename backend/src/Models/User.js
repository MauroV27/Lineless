import { ConnectDB } from '../DB/connectDB.js';
import { collection, where, getDocs, doc, getDoc, addDoc, query, updateDoc } from 'firebase/firestore';
// import { where } from 'firebase/firestore';

export class UserDAO {

    async create( userData ){
        
        if ( this.#checkInputText(userData.username) || this.#checkInputText(userData.password) || this.#checkInputText(userData.email) || this.#checkInputText(userData.name) ) {
            return { data: null, status: 'ERROR', message: "Data entry failure" };
        }

        const db = new ConnectDB();
        const usersRef = collection(db, 'users');

        const userConstructor = {
            username : userData.username,
            password : await this.#hashPassword(userData.password),
            email    : userData.email,
            name     : userData.name
        }

        const userExists = this.#checkUserExists(userConstructor.username, userConstructor.email, usersRef);

        if ( userExists ){
            return { data : null, status : 'ERROR', message : "User already exists!" };
        }
        
        const result = await addDoc(usersRef, userConstructor)
            .then( doc => {
                const {name, email, username } = doc.data();
                const data = {name, email, username, userID: doc.id};

                return { data, status: 'OK', message : "Success in create user" }
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
     */
    async validateLogin( username, password ){
        
        if ( this.#checkInputText( password) || this.#checkInputText( username) ) {
            return { data : null, status : 'ERROR', message : "Data entry failure" };
        }
        
        const userData = await this.#findUserByProperite(username, "username");
        
        if ( userData == null || userData == undefined ){
            return { data : null, status : 'ERROR', message : "User not found!" };
        }

        if ( userData.password == null || userData.password == undefined || userData.password == "" ){
            return { data : null, status : 'ERROR', message : "Faill to load data" };
        }

        const passwordIsValid = await this.#comparePassword( password, userData.password );

        if ( passwordIsValid ){
            return { data : { userID: userData.id }, status : 'OK', message : "Success in validate login" };
        } 
            
        return { data : null, status : 'OK', message : "Login is invalid" };   
    }

    async delete( userAccountToDelete ){
        // [TODO] : needs to be implemented
    }

    async registerUserAsOrganizer( userID ){
        if ( this.#checkInputText(userID) ){
            return { data:null, status:"ERROR", message:"Data entry failure" };
        }

        const db = new ConnectDB();

        const userRef = doc(db, "users", userID);
        const userSnap = await getDoc( userRef );

        if ( userSnap.exists() == false ){
            return {data:null, status:"ERROR", message:"User not found"};
        }

        const dataToUpdate = {
            organizer : true,
        }

        const result = await updateDoc(userRef, dataToUpdate)
            .then( docRef => {
                return {data: dataToUpdate, status:"OK", message:"Success in register user as organzier."}
            })
            .catch( error => {
                return {data:null, status:"ERROR", message:"Failed in register user as organzier."}
            })
        
        return result;
    }

    async isUserOrganizer( userID ){
        if ( this.#checkInputText(userID) ){
            return { data:false, status:"ERROR", message:"Data entry failure" };
        }

        const db = new ConnectDB();

        const userRef = doc(db, "users", userID);
        const userSnap = await getDoc( userRef );

        if ( userSnap.exists() == false ){
            return {data:false, status:"ERROR", message:"User not found"};
        }
        
        if ( userSnap.data()?.organizer ){
            return {data:true, status:"OK", message:"User is organizer"};
        }

        return {data:false, status:"ERROR", message:"User is not organizer"};
    }

    // Private methods ----------------------------------------

    // Private methods to access database

    async #checkUserExists( username, email, usersRef ){
        // const db = new ConnectDB();

        // const usersRef = collection(db, 'users');
        const existsUsername = query( usersRef, where('username', '==', username));
        const usernameSnap = await getDocs(existsUsername);

        if ( usernameSnap.empty == false ){
            return true;
        }

        const existsEmail = query( usersRef, where('email', '==', email));
        const userEmailSnap = await getDocs(existsEmail);

        if ( userEmailSnap.empty == false ){
            return true;
        }

        return false;
    }

    async #findUserByProperite( value, propertie ){

        const db = new ConnectDB();
        const usersRef = collection(db, 'users');
        
        const querySnapshot = query( usersRef, where(propertie, "==", value));
        
        const userSnap = await getDocs(querySnapshot)

        if ( userSnap == null || userSnap.exists == false || userSnap == undefined ){
            return null;
        }
        let userdata = null;
        
        userSnap.forEach( doc => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            const { password } = doc.data();
            userdata = { password, id: doc.id };
        });

        return userdata;
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
        return inputData == null || inputData == undefined || inputData == "";
    }

}