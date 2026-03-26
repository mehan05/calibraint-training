import { AppDataSource } from "./data-source.js";

export async function connectDB(){
    try {
         const db = await AppDataSource.initialize();
         if(db){
            return "DB Connected "
         }
    } catch (error) {
        if(error instanceof Error){
            console.log(error);
            return `Cant connect to db:${error.message}`
        }
    }
}