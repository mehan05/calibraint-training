import { AppDataSource } from "../config/data-source.js";

export class ChatService{
    private ChatRepository  = AppDataSource.getRepository("Chat");
    private ChatParticipantsRepository = AppDataSource.getRepository("ChatParticipants");
    async getReceiverId(chatId:string,userId:string){

        try {
            
            const chat = await this.ChatRepository.findOne({
                where:{chatId:chatId},
                relations:{
                    chatParticipants: {
                        user: true
                    }
                }
            })

            if(!chat){
                throw new Error("Chat not found")
            }

    
            const participants = chat.chatParticipants.map((par:any)=>{
                return par.user.userId
            })


            return participants.filter((id:string)=>{
                return id !== userId
            })[0]
        } catch (error) {
            console.log("error executed")
            console.log(error);
            return null;
        }
            
    }

    async createChat(userOne:string,userTwo:string){
        
        const chat = this.ChatRepository.create({
            chatId: crypto.randomUUID(),
            createdAt: new Date(),
        });

        await this.ChatRepository.save(chat);

        const chatParticipantOne = this.ChatParticipantsRepository.create({
                chat:chat,
                user:userOne
        })            

        const chatParticipantTwo = this.ChatParticipantsRepository.create({
                chat:chat,
                user:userTwo
        })            

        await this.ChatParticipantsRepository.save([chatParticipantOne,chatParticipantTwo])

        await this.ChatRepository.save(chat);
        return chat;
    }


   async checkChatExist(userId:string,chatId:string){
    try {
        const chat = await this.ChatRepository.findOne({
            where:{
                chatId:chatId,
                chatParticipants:{
                    user:{
                        userId:userId
                    }
                }
            },
            relations:{
                chatParticipants:{
                    user:true
                }
            }
        })
        
        console.log("check user executed");
        console.log("user",chat);

        if(!chat){
            throw new Error("Chat not found")
        }

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }

    
}


}