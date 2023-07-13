import { UserDAO } from "../Models/User.js";
import { EventDAO } from "../Models/Event.js";
import { ProductDAO } from "../Models/Product.js";

import pkg from 'express';
const { Request, Response } = pkg;

const userDAO = new UserDAO();
const eventDAO = new EventDAO();
const productDAO = new ProductDAO();

export class OrganizerController{

    /**
     * Register a user like a organizer
     * @param {Request} req 
     * @param {Response} res 
     */
    async registerOrganizer(req, res){
        // res.status(501).json({message:"Success in register organizer", data:null, status:"OK"});
        const { userID } = req.body
        const registerOrganizer = await userDAO.registerUserAsOrganizer( userID );

        if ( registerOrganizer.data == null ){
            return res.status(400).json(registerOrganizer);
        }

        return res.status(200).json(registerOrganizer);
    }

    async createEvent(req, res){
        // [ISSUE] : need be tested...
        const { name, description, organizer, sellers, products} = req.body;

        const isOrganizerValid = await userDAO.isUserOrganizer( organizer );

        if ( isOrganizerValid.data == false ){
            return res.status(400).json(isOrganizerValid);
        }

        const eventWasCreated = await eventDAO.create( name, description, organizer, sellers, products );

        if ( eventWasCreated.data == null ){
            return res.status(400).json(eventWasCreated);
        }

        return res.status(200).json(eventWasCreated);
    }

    updateEvent(req, res){
        res.status(501).json({message:"Success in update event", data:null, status:"OK"});
    }

    async registerSellerInEvent(req, res){
        const { eventID, organizerID, sellerID } = req.body;

        const organizerIsValid = await userDAO.isUserOrganizer( organizerID ); 

        if ( organizerIsValid.data == false ){
            return res.status(400).json({message:"User not aloweed to modify event data", data:null, status:"ERROR"});
        }

        const sellerIsValid = await userDAO.isUserSeller( sellerID ); 

        if ( sellerIsValid.data == false ){
            return res.status(400).json({message:"User not aloweed to sell", data:null, status:"ERROR"});
        }

        const addSeller = await eventDAO.addSeller(eventID, sellerID);

        if ( addSeller.data == null ){
            return res.status(500).json(addSeller);
        }

        return res.status(200).json(addSeller);
    }

    getSellersInEvent(req, res){
        res.status(501).json({message:"Get sellers in event", data:[], status:"OK"});
    }

    getSellerInEvent(req, res){
        res.status(501).json({message:"Get seller in even", data:null, status:"OK"});
    }

    removeSellerInEvent(req, res){
        res.status(501).json({message:"Success in remove seller", data:null, status:"OK"});
    }

    async addProductInEvent(req, res){
        const { eventID, organizerID, product } = req.body;

        const organizerIsValid = await userDAO.isUserOrganizer( organizerID ); 

        if ( organizerIsValid.data == false ){
            return res.status(400).json({message:"User not aloweed to modify event data", data:null, status:"ERROR"});
        }

        const getProductData = await productDAO.create(product, eventID);

        if ( getProductData.data == null ){
            return res.status(400).json(getProductData);
        }

        // [ISSUE] : Not checked if event exists :
        // const productID = getProductData.data.id;
        const addProduct = await eventDAO.addProduct(eventID, getProductData.data.id);

        if ( addProduct.data == null ){
            return res.status(500).json(addProduct);
        }

        return res.status(200).json(addProduct);
    }

    updateProductInEvent(req, res){
        res.status(501).json({message:"Success in update product in event", data:null, status:"OK"});
    }

    removeProductInEvent(req, res){
        res.status(501).json({message:"Success in remove product in event", data:null, status:"OK"});
    }
}