import * as api from '../api/organizer';


export const registerOrganizer  = async (userID) => {
    try {
      return await api.registerOrganizer(userID);
      
    } catch (error) {
      console.log(error.message);
    }
};

// name, description, organizer, sellers, products
export const createEvent = async (name, description, organizer, sellers, products) => {
    try {
      return await api.createEvent(name, description, organizer, sellers, products);
      
    } catch (error) {
      console.log(error.message);
    }
}

export const registerSellerInEvent = async (eventID, organizerID, sellerID) => {
    try {
      return await api.registerSellerInEvent(eventID, organizerID, sellerID);
      
    } catch (error) {
      console.log(error.message);
    }
}

// produc = { name, description, price }
export const registerproductInEvent = async (organizerID, eventID, product) => {
    try {
      return await api.registerproductInEvent(organizerID, eventID, product);
      
    } catch (error) {
      console.log(error.message);
    }
}