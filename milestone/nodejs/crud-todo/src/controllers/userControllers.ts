import { Request, Response } from "express";
import { comparePassword, hashPassword } from "../auth/bcrypt.js";
import { UserModel } from "../model/userModel.js";
import { CreateUserRequestBodyInterface } from "../utils/userBodyInterface.js";
import { response } from "../utils/response.js";
import { signJwt, verifyToken } from "../auth/jwt.js";

interface ReqUser extends Request{
  user?:any
}

export async function getAllUsers(req: ReqUser, res: Response) {
  try {
    
      const isAdmin = req.user.isAdmin;

      if(!isAdmin){
        return response(400,true,"Admin not found",res);
      }

      const users = await UserModel.find({}).limit(20);

      if(users){
        return response(200,false,users,res);
      }

      return response(400,true,"users not found",res);

  } catch (error) {
    if(error instanceof Error)
      return response(500,true,error.message,res);
  }
}

export async function getUserById(req: ReqUser, res: Response) {
   try {

       const isAdmin = req.user.isAdmin;

      if(!isAdmin){
        return response(400,true,"Admin not found",res);
      }

      let userId = req.params.id;
      let user  =await UserModel.findById(userId);

      if(user){
        return response(200,false,user,res);
      }

      return response(400,true,"user not found",res);

   } catch (error) {
        if(error instanceof Error)
          return response(500,true,error.message,res);
   }
}

export async function registeruser(req: Request, res: Response) {
  try {
    let { username, password, isAdmin }: CreateUserRequestBodyInterface =
      req.body;

       const user = await UserModel.findOne({
      username,
    });

    if(user){
        return response(400,true,"user already exist", res);
    }

    const passwordhash = await hashPassword(password);

    const userNew = await UserModel.create({
      username,
      password: passwordhash,
      isAdmin: isAdmin ? true : false,
    });

    console.log("new user",userNew);

    const token = signJwt({
      username,
      id: userNew._id,
      isAdmin: isAdmin ? true : false,
    });

    return response(200, false, "user created Successfully", res, token);
  } catch (error) {
    if (error instanceof Error) {
      return response(400, true, "user not created", res,undefined,error);
    }
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    let { username, password }: CreateUserRequestBodyInterface = req.body;

    const user = await UserModel.findOne({
      username,
    });

    if (user && user.password) {
      const isPasswordSame = await comparePassword(password, user.password);

      if (isPasswordSame) {
        const token = signJwt({
          username,
          id: user._id,
          isAdmin: user.isAdmin ? true : false,
        });

        return response(200,false,"logged in successfully",res,token);

      }
      else{
         return response(400, true, "Password is wrong",res);
      }
    }
    else{
        return response(404,true,"user not found",res);
    }
  } catch (error) {
    return response(400, true, "user not created", res,undefined,error);
  }
}
