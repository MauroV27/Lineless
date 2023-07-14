import axios from 'axios';
import { baseURL } from './baseurl';

const URL = baseURL + '/organizer';

// pass a valid userID
export const registerOrganizer  = async (userID) => {
    return await axios.post(`${URL}/register`, {userID});
};

// name, description, organizer, sellers, products
export const createEvent = async (name, description, organizer, sellers, products) => {
    return await axios.post(`${URL}/event`, {name, description, organizer, sellers, products});
}

export const registerSellerInEvent = async (eventID, organizerID, sellerID) => {
    return await axios.post(`${URL}/seller`, {eventID, organizerID, sellerID});
}

// produc = { name, description, price }
export const registerproductInEvent = async (organizerID, eventID, product) => {
    return await axios.post(`${URL}/product`, {eventID, organizerID, product});
}
