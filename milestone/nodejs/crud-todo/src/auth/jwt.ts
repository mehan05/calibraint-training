import jwt from "jsonwebtoken";
import "dotenv/config";
import { CreateUserRequestBodyInterface } from "../utils/userBodyInterface.js";
import mongoose from "mongoose";

interface JwtDataInterface extends Omit<CreateUserRequestBodyInterface , "password"> {
    id:mongoose.Types.ObjectId
}

export function signJwt(data:JwtDataInterface){
    if(process.env.JWT_SECRET){
        const token = jwt.sign(data,process.env.JWT_SECRET);
        return token;
    }
}


export function verifyToken(token:string){
    if(token && process.env.JWT_SECRET){
        const data = jwt.verify(token,process.env.JWT_SECRET);
        return data;
    }
}
