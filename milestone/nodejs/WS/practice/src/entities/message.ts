import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Chat } from "./Chat.js";
import { User } from "./User.js";

@Entity()
export class Message{

    @PrimaryGeneratedColumn()
    messageId!:number;

    @ManyToOne(()=>Chat, (chat)=>chat.messages)
    chat!:Relation<Chat>;

    @ManyToOne(()=>User, (user)=>user.messages)
    user!:Relation<User>

    @CreateDateColumn()
    sentAt!:Date;

    @Column()
    message!:string
}