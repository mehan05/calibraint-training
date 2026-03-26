import express, {  type NextFunction, type Request, type Response } from "express";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import UserRouter from "./routes/user.route.js";
import MessageRouter from "./routes/message.route.js";
import { chatMechanism } from "./ws/websocketChat.js";
import ChatRouter from "./routes/chat.route.js";

const app = express();

const httpServer = createServer(app);
export const ws = new WebSocketServer({server:httpServer});

app.use(express.json());

app.use("/api/user",UserRouter);
app.use("/api/message",MessageRouter);
app.use("/api/chat/",ChatRouter);

chatMechanism();

export default httpServer;