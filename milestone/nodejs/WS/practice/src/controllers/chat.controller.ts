import type { Request, Response } from "express";
import { ChatService } from "../service/chat.service.js";

export class ChatController{

    private chatService = new ChatService();

    async createChat(req:Request,res:Response){
           try {
                const {userOne,userTwo} = req.body;
                const chat = await this.chatService.createChat(userOne,userTwo);
                return res.status(200).json({
                    status:"success",
                    data:chat
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

   
}