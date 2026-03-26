import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { User } from "./User.js";
import { Chat } from "./Chat.js";


@Entity()
export class ChatParticipants{

    @PrimaryGeneratedColumn()
    chatParticipantsId!:number
    
    @ManyToOne(()=>User, (user)=>user.chatParticipants)
    user!:Relation< User>;

    @ManyToOne(()=>Chat, (chat)=>chat.chatParticipants)
    chat!:Relation< Chat>;
}