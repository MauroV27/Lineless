import axios from 'axios';
import { baseURL } from './baseurl';

const URL = baseURL + '/event';

//{ "username" 	"password" 	"email"    	"name"   }
export const getAllOngoingEvents = async () => {
    return await axios.get(`${URL}s`);
};


export const getEventData  = async (eventID) => {
    return await axios.get(`${URL}`, eventID);
};


export const getAllProductsInEvent  = async (eventID) => {
    return await axios.get(`${URL}/products`, eventID);
};


export const getProductInEvent  = async (productID) => {
    return await axios.get(`${URL}/products/product`, productID);
};


//eventOrder = { userID, sellerID, productsList, eventID }
export const createOrder  = async ( eventOrder ) => {
    return await axios.post(`${URL}/order`, eventOrder);
};


// 	userID, eventID, orderID
export const getOrder  = async ( userID, eventID, orderID ) => {
    return await axios.get(`${URL}/order`, {userID, eventID, orderID});
};


// 	userID, eventID
export const getOrders  = async ( userID, eventID ) => {
    return await axios.get(`${URL}/orders`, {userID, eventID});
};


