import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { Message } from "./message.js";
import { ChatParticipants } from "./chatParticipants.js";

@Entity()
export class User{
    @PrimaryColumn({type:"varchar"})
    userId!: string;

    @Column()
    username!:string;

    @Column()
    email!:string;

    @OneToMany(()=>Message,(message)=>message.user)
    messages!:Relation<Message[]>

    @OneToMany(()=>ChatParticipants,(chatParticipants)=>chatParticipants.user)
    chatParticipants!: Relation<ChatParticipants[]>;

}