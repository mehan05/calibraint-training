import type { Request, Response } from "express";
import { UserServices } from "../service/user.service.js";
import type { AuthReq } from "../interfaces.js";
import { signJwt } from "../utils/helper.js";



export class UserControllers{
    private userServices = new UserServices();
    
    async  getAllUsers(req:Request,res:Response){
        try {
            const {limit,page} = req.body;
            
            const users = await this.userServices.getAllUsersService(limit,page);

            return res.status(200).json({
                status:"success",
                data:users
            })
        } catch (error) {
            if(error instanceof Error){
                return res.status(400).json({
                    status:"fail",
                    message:error.message
                })
            }
        }
    }



    async registerUser(req:AuthReq,res:Response){

        try {
            const {email,name,userId} = req.user;
            console.log("reqiest user",req.user);
            const checkUser = await this.userServices.getUserByEmail(email);
            if(checkUser){
                return res.status(400).json({
                    status:"fail",
                    message:"User already exists"
                })
            }
            const user = await this.userServices.addUser(email,name,userId);

            return res.status(200).json({
                status:"success",
                data:user,
            })
        } catch (error) {
            if(error instanceof Error){
                console.log(error);
                return res.status(400).json({
                    status:"fail",
                    message:error.message
                })
            }
        }

    }

 


}