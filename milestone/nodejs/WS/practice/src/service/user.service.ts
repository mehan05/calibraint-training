import { AppDataSource } from "../config/data-source.js";
import { getSkipAmount, getTotalPages } from "../utils/helper.js";

export class UserServices{
    private UserRepository = AppDataSource.getRepository("User");

    async getAllUsersService(limit:number=10, page:number=1){
        const skip = getSkipAmount(page,limit);
        const [users,totalCount] = await this.UserRepository.findAndCount({
            take:limit,
            skip:skip
            
        });

        const totalPage = getTotalPages(totalCount,limit)
        
        return {
            data:users,
            totalPage,
            currentPage:page,
            totalCount
        }
    }



    async addUser(email:string, name:string,id:string){
        let user = this.UserRepository.create({
            email,
            userId:id.toString(),
            username:name,
            password:"Google-OAUTH-TOKEN_Created-Instead-of-Password"
        })

        await this.UserRepository.save(user);
        return user;
    }

    async getUserByEmail(email:string){
        return await this.UserRepository.findOneBy({email:email});
    }




    
}