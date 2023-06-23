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
     * getProducts ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    async getProducts( req, res ){

        const productList = await productDAO.getAllProductsInEvent( ['H1XXXqHFSpKygPRSiZF3'] ); // [TEST]

        res.status(200).json({message:"Get products in event", data:productList, status:"OK"});
    }

    /**
     * getProduct ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    getProduct( req, res ){
        res.status(200).json({message:"Get ONE product in event", data:null, status:"OK"});
    }

    /**
     * getAllOngoingEvents ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    async getAllOngoingEvents( req, res ){
        const eventList = await eventDAO.getAllOngoigEvents();

        res.status(200).json({message:"Get all ongoing events", data:eventList, status:"OK"});
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
    
}