import type { Request, Response } from "express";
import { MessageService } from "../service/message.service.js";
import type { AuthReq } from "../interfaces.js";

export class MessageControllers {
  private messageService = new MessageService();

  async getMessages(req: Request, res: Response) {
    try {
      const { limit, page, chatId ,userId} = req.body;
      console.log(limit, page,chatId,userId);
      const messages = await this.messageService.getMessages(userId, chatId,limit, page);
      return res.status(200).json({
        status: "success",
        data: messages,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        return res.status(400).json({
          status: "fail",
          message: error.message,
        });
      }
    }
  }

  async addMessages(req: AuthReq, res: Response) {

    try {
      const user = await this.messageService.addMessageService(req.user.userId,req.body.chatId,req.body.message);
      if(user){
        return res.status(200).json({
            status:"success",
            data:user
        })
      }

    } 
    catch (error) {
        if(error instanceof Error){
            return res.status(400).json({
                status:"fail",
                message:error.message
            })
        }
    }

  }
}
