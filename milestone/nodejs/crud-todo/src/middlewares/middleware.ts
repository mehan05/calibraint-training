import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../auth/jwt.js";
import { response } from "../utils/response.js";

export function authMiddleware(req:Request,res:Response,next:NextFunction){
    if(req.headers){
        const authorization= req.headers.authorization;
        if(authorization){
            const token = authorization.split(" ")[1];
            if(token){
                const data = verifyToken(token);
                //@ts-ignore
                req.user = data;
                next()
            }
        }
        else{
            return response(401, true, "Unauthorized", res);
        }
    }
    else{
        return response(401, true, "Unauthorized", res);
    }
}