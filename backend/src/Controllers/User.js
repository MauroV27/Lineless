import pkg from 'express';
const { Request, Response } = pkg;

import { UserDAO } from '../Models/User.js';

const userDAO = new UserDAO();

export class UserController{
 
    /**
     * create an account ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    async createAccount(req, res){
        // Get res data to create a user
        const createUser = await userDAO.create( req.body );

        if ( createUser.data == null ){
            return res.status(500).json(createUser)
        }

        res.status(200).json(createUser);
    }

    /**
     * Validate Login ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    async validateLogin(req, res){
        const { username, password } = req.body;

        const userIsValid = await userDAO.validateLogin( username, password );

        if ( userIsValid.data == null ){
            return res.status(500).json(userIsValid)
        }

        return res.status(200).json(userIsValid);
        // res.status(200).json({message:"Success in login account", data:{token:"randomToken"}, status:"OK"});
    }

    /**
     * Logout user ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    logoutUser(req, res){
        res.status(200).json({message:"Success in logout", data:null, status:"OK"});
    }

}