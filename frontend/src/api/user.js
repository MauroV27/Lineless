import axios from 'axios';
import { baseURL } from './baseurl';

const URL = baseURL + '/';

//{ "username" 	"password" 	"email"    	"name"   }
export const registerUser  = async (createUser) => {
    return await axios.post(`${URL}/singin`, createUser);
};


// { username, password }
export const loginUser  = async (username, password) => {
    return await axios.post(`${URL}/login`, {username, password});
};