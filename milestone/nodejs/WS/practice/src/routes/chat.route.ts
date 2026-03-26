import express from "express";
import { ChatController } from "../controllers/chat.controller.js";

const ChatRouter  = express.Router();
const chatController = new ChatController();

ChatRouter.post("/create-chat",chatController.createChat.bind(chatController));



export default ChatRouter;
