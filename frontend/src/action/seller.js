import * as api from '../api/seller';

// pass a valid userID
export const registerSeller  = async (userID) => {
    try {
      return await api.registerSeller(userID);
      
    } catch (error) {
      console.log(error.message);
    }
};

export const getOrders  = async (eventID, sellerID) => {
    try {
      return await api.getOrders(eventID, sellerID);
      
    } catch (error) {
      console.log(error.message);
    }
};


// orderID, sellerID
export const orderIsReady  = async (orderID, sellerID) => {
      try {
      return await api.orderIsReady(orderID, sellerID);
      
    } catch (error) {
      console.log(error.message);
    }
};

// orderID, sellerID
export const orderIsReceived  = async (orderID, sellerID) => {
    try {
      return await api.orderIsReceived(orderID, sellerID);
      
    } catch (error) {
      console.log(error.message);
    }
};