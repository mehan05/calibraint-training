import type { NextFunction, Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import type { AuthReq } from "../interfaces.js";




export async function authMiddleware(req:AuthReq, res:Response, next:NextFunction) {

    try {
        const client = new OAuth2Client();
        
        const header = req.headers.authorization;

        if(!header || !header.startsWith("Bearer ")){
            return res.status(401).json({message:"Unauthorized"});
        }
        
        const token = header.split(" ")[1];
        
        if(token){

            client.setCredentials({
                access_token: token
            })

            const userInfo = await client.request({
                url:"https://www.googleapis.com/oauth2/v1/userinfo",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })

            if(userInfo){
                const data = userInfo.data as {email:string,name:string, id:string};
                console.log("data",data);
                if(data ){
                    req.user = {
                        email:data.email,
                        name:data.name,
                        userId: data.id
                    };
                }
            }

            next();
        }
        
    } catch (error) {       
        if(error instanceof Error){
            return res.status(401).json({message:error.message});
        }
    }

}