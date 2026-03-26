import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Message } from "./message.js";
import { User } from "./User.js";
import { ChatParticipants } from "./chatParticipants.js";


@Entity()
export class Chat{
    @PrimaryColumn({type:"varchar", length:50})
    chatId!:string;

    @Column()
    createdAt!:Date
    
    @OneToMany(()=>Message,(message)=>message.chat)
    messages!:Relation<Message[]>

    @OneToMany(()=>ChatParticipants,(chatParticipants)=>chatParticipants.chat)
    chatParticipants!:Relation<ChatParticipants[]>;

}