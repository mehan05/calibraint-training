import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config"
import { User } from "../entities/User.js";
import { Chat } from "../entities/Chat.js";
import { ChatParticipants } from "../entities/chatParticipants.js";
import { Message } from "../entities/message.js";

console.log(process.env.POSTGRES_URI);
export const AppDataSource = new DataSource({
        type:'postgres',
        url:process.env.POSTGRES_URI!,
        ssl:true,
        logging:true,
        entities:[Chat,ChatParticipants,Message,User],
        // migrations: ["dist/migrations/*.js"],
        synchronize:true
});




