import { UserDAO } from "../Models/User.js";
import { EventDAO } from "../Models/Event.js";

import pkg from 'express';
const { Request, Response } = pkg;

const userDAO = new UserDAO();
const eventDAO = new EventDAO();

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

    registerSellerInEvent(req, res){
        res.status(501).json({message:"Success in register seller", data:null, status:"OK"});
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

    addProductInEvent(req, res){
        res.status(501).json({message:"Success in add product in event", data:null, status:"OK"});
    }

    updateProductInEvent(req, res){
        res.status(501).json({message:"Success in update product in event", data:null, status:"OK"});
    }

    removeProductInEvent(req, res){
        res.status(501).json({message:"Success in remove product in event", data:null, status:"OK"});
    }
}