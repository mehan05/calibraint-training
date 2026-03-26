import bcrypt from "bcrypt";
import "dotenv/config";
const SALT_ROUND = process.env.SALT_ROUND



export function hashPassword(password:string){
    console.log("sale",SALT_ROUND)
    if(SALT_ROUND)
    return  bcrypt.hash(password,Number(SALT_ROUND));
}


export function comparePassword(password:string,hash:string){
    return bcrypt.compare(password,hash);
}