import jwt from "jsonwebtoken";
import "dotenv/config";

export function getSkipAmount(page: number, limit: number): number {
    return (page - 1) * limit;
}


export function getTotalPages(totalCount: number, limit: number): number {
    return Math.ceil(totalCount / limit);
}


export function signJwt(data:any){
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


