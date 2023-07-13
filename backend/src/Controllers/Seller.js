import pkg from 'express';
const { Request, Response } = pkg;

import { UserDAO } from '../Models/User.js';
import { EventDAO } from '../Models/Event.js';
import { OrderDAO } from '../Models/Order.js';

const userDAO = new UserDAO();
const eventDAO = new EventDAO();
const orderDAO = new OrderDAO();

export class SellerController{

    /**
     * Register a user like a seller
     * @param {Request} req 
     * @param {Response} res 
     */
    async registerSeller(req, res){
        const { userID } = req.body
        const registerOrganizer = await userDAO.registerUserAsSeller( userID );

        if ( registerOrganizer.data == null ){
            return res.status(400).json(registerOrganizer);
        }

        return res.status(200).json(registerOrganizer);
    }

    /**
     * Register a user like a seller
     * @param {Request} req 
     * @param {Response} res 
     */
    async getOrders(req, res){

        const {eventID, sellerID } = req.body;

        const orders = await orderDAO.getAllOrders( sellerID, eventID );

        if ( orders.data == null ){
            return res.status(400).json(orders);
        }

        return res.status(200).json(orders);
    }

    async getOrder(req, res){

        const {orderID, sellerID } = req.body;

        const order = await orderDAO.getOrder( orderID );

        if ( order.data == null ){
            return res.status(400).json(order);
        }

        if ( order.data?.seller_id || order.data.seller_id != sellerID ){
            return res.status(400).json({data:null, status:"ERROR", message:"seller and order not connected."});
        }

        return res.status(200).json(order);
    }

    /**
     * Register a user like a seller
     * @param {Request} req 
     * @param {Response} res 
     */
    async updateOrder(req, res){
        const {orderID, sellerID, state } = req.body;

        if ( state != "ready" && state != "received" ){
            return res.status(400).json({data:null, status:"ERROR", message: "Data entry failure"});
        }

        const order = await orderDAO.getOrder( orderID );

        if ( order.data == null ){
            return res.status(400).json(order);
        }

        if ( order.data.seller_id != sellerID ){
            return res.status(400).json({data:null, status:"ERROR", message:"seller and order not connected."});
        }

        const updateOrder = await orderDAO.updateOrderStatus(orderID, state);

        if ( updateOrder.data == null ){
            return res.status(500).json(updateOrder);
        }

        return res.status(200).json(order);
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