import pkg from 'express';
const { Request, Response } = pkg;

export class SellerController{

    /**
     * Register a user like a seller
     * @param {Request} req 
     * @param {Response} res 
     */
    registerSeller(req, res){
        res.status(200).json({message:"Success in register seller", data:null, status:"OK"});
    }

    /**
     * Register a user like a seller
     * @param {Request} req 
     * @param {Response} res 
     */
    getOrders(req, res){
        res.status(200).json({message:"Get orders", data:[], status:"OK"});
    }

    /**
     * Register a user like a seller
     * @param {Request} req 
     * @param {Response} res 
     */
    updateOrder(req, res){
        res.status(200).json({message:"Update order", data:null, status:"OK"});
    }

    /**
     * Delete a order ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    deleteOrder(req, res){
        res.status(200).json({message:"Success in delete order", data:null, status:"OK"});
    }
}