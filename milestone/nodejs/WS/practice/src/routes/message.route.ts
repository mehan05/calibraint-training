import express from "express";
import { MessageControllers } from "../controllers/message.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const MessageRouter = express.Router();
const messageController = new MessageControllers();

MessageRouter.get("/get-messages",authMiddleware,messageController.getMessages.bind(messageController))


export default MessageRouter;
