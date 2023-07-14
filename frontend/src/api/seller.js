import axios from 'axios';
import { baseURL } from './baseurl';

const URL = baseURL + '/seller';

// pass a valid userID
export const registerSeller  = async (userID) => {
    return await axios.post(`${URL}/register`, {userID});
};

export const getOrders  = async (eventID, sellerID) => {
    return await axios.get(`${URL}/order`, {eventID, sellerID});
};


// orderID, sellerID
export const orderIsReady  = async (orderID, sellerID) => {
    return await axios.get(`${URL}/orders/order`, {orderID, sellerID, state : "ready"});
};

// orderID, sellerID
export const orderIsReceived  = async (orderID, sellerID) => {
    return await axios.get(`${URL}/orders/order`, {orderID, sellerID, state : "received"});
};



