import * as api from '../api/event';

export const getAllOngoingEvents = async () => {
    try {
        return await api.getAllOngoingEvents();
        
    } catch (error) {
        console.log(error.message);
    }
}

export const getEventData = async (eventID) => {
    try {
        return await api.getEventData(eventID);
        
    } catch (error) {
        console.log(error.message);
    }
}


export const getAllProductsInEvent  = async (eventID) => {
    try {
        return await api.getAllProductsInEvent(eventID);
        
    } catch (error) {
        console.log(error.message);
    }
};


export const getProductInEvent  = async (productID) => {
    try {
        return await api.getProductInEvent(productID);
        
    } catch (error) {
        console.log(error.message);
    }
};


//eventOrder = { userID, sellerID, productsList, eventID }
export const createOrder  = async ( userID, sellerID, productsList, eventID ) => {
    try {
        return await api.getAllProductsInEvent({ userID, sellerID, productsList, eventID });
        
    } catch (error) {
        console.log(error.message);
    }
};


// 	userID, eventID, orderID
export const getOrder  = async ( userID, eventID, orderID ) => {
    try {
        return await api.getOrder(userID, eventID, orderID);
        
    } catch (error) {
        console.log(error.message);
    }
};


// 	userID, eventID
export const getOrders  = async ( userID, eventID ) => {
    try {
        return await api.getOrders(userID, eventID);
        
    } catch (error) {
        console.log(error.message);
    }
};



