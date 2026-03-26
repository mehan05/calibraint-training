import { AppDataSource } from "../config/data-source.js";
import { getSkipAmount, getTotalPages } from "../utils/helper.js";

export class MessageService {
    
    private MessageRepository = AppDataSource.getRepository("Message");

    async getMessages(userId:string, chatId: string, limit: number = 10, page: number = 1) {
        const skip = getSkipAmount(page, limit);
        const [messages, totalCount] = await this.MessageRepository.findAndCount({
            where: { chat: { chatId }, user:{userId} },
            take: limit,
            skip: skip,
            order: {
                sentAt: "DESC"
            }
        });
        const totalPage = getTotalPages(totalCount, limit)
        return {
            data: messages.reverse(),
            totalPage,
            currentPage: page,
            totalCount
        }
    }


    async addMessageService(userId: string, chatId: string, message: string) {
        const newMessage = this.MessageRepository.create({
            user: { userId },
            chat: { chatId },
            message,
        });

        return this.MessageRepository.save(newMessage);
    }



}