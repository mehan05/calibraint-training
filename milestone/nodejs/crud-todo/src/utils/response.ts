import { Response } from "express";

export function response(statusCode:number,isError:boolean,message:any, res:Response, token?:string, error?:any, data?:any){
    if(token){
        return  res.status(statusCode).json({status:`${isError? 'failure' : "success"},  message:${message},  token:${token}`})
    }
    if(isError && error){
        return  res.status(statusCode).json({status:`${isError? 'failure' : "success"},  message:${message},   ${error.message? `errorMessage:{${error.message}}`:""}`})
    }
    if(data){
        return  res.status(statusCode).json({status:`${isError? 'failure' : "success"},  message:${message},  data:${data}`})
    }
    return  res.status(statusCode).json({status:`${isError? 'failure' : "success"},  message:${message}`})
}