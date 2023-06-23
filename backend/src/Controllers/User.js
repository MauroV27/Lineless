import pkg from 'express';
const { Request, Response } = pkg;

export class UserController{
 
    /**
     * create an account ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    createAccount(req, res){
        // Get res data to create a user
        res.status(200).json({message:"Success in create account", data:null, status:"OK"});
    }

    /**
     * Validate Login ( not implemented )
     * @param {Request} req 
     * @param {Response} res 
     */
    validateLogin(req, res){
        res.status(200).json({message:"Success in login account", data:{token:"randomToken"}, status:"OK"});
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