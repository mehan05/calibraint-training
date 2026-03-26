//@ts-nocheck
import type { WebSocket } from "ws";
import { ws } from "../app.js";
import { MessageService } from "../service/message.service.js";
import { parse } from "url";
import { OAuth2Client } from "google-auth-library";
import { ChatService } from "../service/chat.service.js";

interface AuthenticatedSocket extends WebSocket {
  userId?: number;
  chatId?: number;
}

const chatService = new ChatService();
const messageService = new MessageService()
const userConnections = new Map<string, Set<WebSocket>>();

export function chatMechanism() {
  ws.on("connection", async (socket, req) => {
    // console.log("connection made", req.headers.cookie);

    const client = new OAuth2Client();
    const { query } = parse(req.url!, true);
    const chatId = query?.chatId;
    // console.log("chatId",chatId);

    if (req.headers && req.headers.cookie && chatId) {
      const token = req.headers.cookie.split(" ")[1];
      // console.log("cookie",token);

      if (token) {
        client.setCredentials({
          access_token: token,
        });
      }
      let userInfo;
      try {
         userInfo = await client.request({
          url: "https://www.googleapis.com/oauth2/v1/userinfo",
          headers: {
            Authorization:`Bearer ${token}`
          },
        });
        
      } catch (error) {
        console.log("error",error.message);
        socket.close(1008,"Google auth failed")
        return;
      }

      if (userInfo && userInfo.data && (userInfo.data as any).id) {
        if (!userConnections.has(userInfo.data.id)) {
          userConnections.set(userInfo.data.id, new Set());
        } 
          userConnections.get(userInfo.data.id)?.add(socket);
        

        const isChatExist = await chatService.checkChatExist(
          userInfo.data.id as string,
          chatId as string,
        );

        // console.log(isChatExist);
        if (!isChatExist) {
          socket.close(1008,"You are not authorized to access this chat");
          return;
        }

        socket.on("close", () => {
          userConnections.get(userInfo.data.id)?.delete(socket);
        });

        socket.on("message", async (message) => {

          await messageService.addMessageService(
            userInfo.data.id as string,
            chatId as string,
            message.toString(),
          );

          const receiverId = await chatService.getReceiverId(
            chatId as string,
            (userInfo.data as any).id as string,
          );

          if(!receiverId){
            socket.close(1008,"Receiver if not found");
          }

          const receiverSocket = userConnections.get(receiverId);

          if (receiverSocket) {
            receiverSocket.forEach((rece) => {
              rece.send(message.toString());
            });
          }
        });
      }
    } else {
      console.log("no cookie");
      return;
    }
  });
}
