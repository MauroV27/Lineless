import { EventDAO } from '../Models/Event.js';
import { ProductDAO } from '../Models/Product.js';

import pkg from 'express';
const { Request, Response } = pkg;

const eventDAO = new EventDAO();
const productDAO = new ProductDAO();

export class EventController {

    /**
     * complaint ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    complaint( req, res ){
        res.status(200).json({message:"Denuncia feita", data:null, status:"OK"});
    }

    /**
     * getProducts ( get All products in a event )
     * @param {Request ( EventID ) } req 
     * @param {Response} res 
     */
    async getProducts( req, res ){

        const { eventID } = req.body;

        const eventExist = await this.#eventExist( eventID );

        if ( eventExist.data == null ){
            return res.status(500).json( eventExist );
        }

        const productsIDList = eventExist.data?.products;

        if ( productsIDList == null || productsIDList == undefined || productsIDList.length == 0 ){
            return res.status(500).json({message:"Not found products in event", data:null, status:"ERROR"});
        }

        const productList = await productDAO.getAllProductsInEvent( productsIDList );

        return res.status(200).json({message:"Get products in event", data:productList, status:"OK"});
    }

    /**
     * getProduct ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    async getProduct( req, res ){
        const { productID } = req.body;

        const getProduct = await productDAO.getProduct( productID );

        if ( getProduct == null ){
            return res.status(404).json({message:"Product Not Found", data:null, status:"ERROR"});
        }

        res.status(200).json({message:"Get product", data:getProduct, status:"OK"});
    }

    /**
     * getAllOngoingEvents ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    async getAllOngoingEvents( req, res ){
        const eventList = await eventDAO.getAllOngoigEvents();

        const dataResponse = {message:"Get all ongoing events", data:eventList, status:"OK"};
        return res.status(200).json(dataResponse);
    }

    /**
     * get Event data ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    async getEvent( req, res ){

        const { eventID } = req.body;

        const eventExist = await eventDAO.getEvent( eventID );

        if ( eventExist.data == null ){
            return res.status(500).json( eventExist );
        }

        return res.status(200).json( eventExist );
    }

    /**
     * createOrder( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    createOrder( req, res ){
        res.status(200).json({message:"Create order in event", data:null, status:"OK"});
    }

    /**
     * getOrder ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    getOrder( req, res ){
        res.status(200).json({message:"Ger order", data:null, status:"OK"});
    }

    /**
     * cancelOrder ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    cancelOrder( req, res ){
        res.status(200).json({message:"Cancel order", data:null, status:"OK"});
    }

    // private methods to use internaly --------

    async #eventExist( eventID ){
        if ( eventID == null || eventID == undefined || eventID == ""){
            return {data:null, status:"ERROR", message:"Event id is undefined."};
        }

        const event = await eventDAO.getEvent( eventID );

        if ( event == null ){
            return {data:null, status:"ERROR", message:"Event id not found."};
        }

        return {message:"Get event data", data:event, status:"OK"};
    }
    
}