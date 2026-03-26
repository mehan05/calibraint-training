import mongoose from "mongoose";
import "dotenv/config";

export async function connectDB(){
    try {
        if(process.env.MONGO_URI){
            console.log("trying connecting mongo");
            const db = await mongoose.connect(process.env.MONGO_URI)
            if(db){
                console.log("DB Connected");
                return;
            }
        }
    } catch (error) {
        if(error instanceof Error){
            console.log("problem with connecting DB", error.message);
            process.exit(1);
        }
    }
}