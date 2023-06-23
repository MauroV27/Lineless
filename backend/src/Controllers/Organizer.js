import pkg from 'express';
const { Request, Response } = pkg;

export class OrganizerController{

    /**
     * Register a user like a organizer
     * @param {Request} req 
     * @param {Response} res 
     */
    registerOrganizer(req, res){
        res.status(200).json({message:"Success in register organizer", data:null, status:"OK"});
    }

    createEvent(req, res){
        res.status(200).json({message:"Success in create event", data:null, status:"OK"});
    }

    updateEvent(req, res){
        res.status(200).json({message:"Success in update event", data:null, status:"OK"});
    }

    registerSellerInEvent(req, res){
        res.status(200).json({message:"Success in register seller", data:null, status:"OK"});
    }

    getSellersInEvent(req, res){
        res.status(200).json({message:"Get sellers in event", data:[], status:"OK"});
    }

    getSellerInEvent(req, res){
        res.status(200).json({message:"Get seller in even", data:null, status:"OK"});
    }

    removeSellerInEvent(req, res){
        res.status(200).json({message:"Success in remove seller", data:null, status:"OK"});
    }

    addProductInEvent(req, res){
        res.status(200).json({message:"Success in add product in event", data:null, status:"OK"});
    }

    updateProductInEvent(req, res){
        res.status(200).json({message:"Success in update product in event", data:null, status:"OK"});
    }

    removeProductInEvent(req, res){
        res.status(200).json({message:"Success in remove product in event", data:null, status:"OK"});
    }
}