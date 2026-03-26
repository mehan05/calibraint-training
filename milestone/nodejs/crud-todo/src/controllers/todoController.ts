import { Request, Response } from "express";
import { TodoModel } from "../model/todoModel.js";
import { CreateTodoBodyInterface } from "../utils/TodoBodyInterface.js";
import { UserModel } from "../model/userModel.js";
import { response } from "../utils/response.js";

interface UserInterface extends Request{
    user?:any
}

export async function createTodo(req:UserInterface,res:Response){

    try {
        let todo:CreateTodoBodyInterface= req.body;

        if(req?.user){
            let user = await UserModel.findOne({
                username:req?.user.username
            });

            if(!user){
                return response(404,true,"user not found",res);
            }
        }

      const createdTodo =   await TodoModel.create({
          title: todo.title,
          description:todo.description,
          isCompleted:false,
          user:req.user.id
        })

    const addTodoIdToUser = await UserModel.findByIdAndUpdate(
        req.user.id,
        {
            $push:{
                todos:createdTodo._id
            }
        }
    )

    if(!(addTodoIdToUser && createdTodo)){
        return response(400,true,"todo not created",res);
    }

        return response(200,false,"todo created successfully",res);

    } catch (error) {
        return response(400,true,"todo not created",res,undefined,error);
    }

}



export async function updateTodo(req:UserInterface,res:Response){

    try {
        let {isCompleted}:Pick<CreateTodoBodyInterface,"isCompleted" >= req.body;
        let todoId = req.params.id;
        console.log("params id",todoId);
        console.log("user_new",req.user);
        // console.log("params id",req.user.id);
       const todo  =  await TodoModel.findOneAndUpdate({
            _id:todoId,
            user: req.user.id
        },
        {
            isCompleted
        }
    );
    console.log("todo",todo);
    if(!todo){
        return response(404,true,"todo not found",res);
    }


    console.log("hello todo",todo);

    return response(200,false,"todo updated successfully",res); 

    } catch (error) {
        return response(400,true,"todo not updated",res,undefined,error);
    }

}


export async function deleteTodo(req:UserInterface,res:Response){
    try {
        const todoId = req.params.id;
        let isAdmin = req.user.isAdmin;
        if(!isAdmin){
            return response(401, true, "Unauthorized: Only admin can delete", res);
        }
        
        const deleteTodo =  await TodoModel.findOneAndDelete({
            _id:todoId,
        });

        if(!deleteTodo){
            return response(404,true,"todo not found",res);
        }
        console.log("deletetodo",deleteTodo);
        return response(200,false,"todo deleted successfully",res);
    } catch (error) {
        return response(400,true,"todo not deleted",res,undefined,error);
    }
}
export async function getTodoById(req:UserInterface,res:Response){

    try {
         const isAdmin = req.user.isAdmin;
        if(!isAdmin){
            return response(400,true,"unauthorised",res);
        }

        let todoId = req.params.id;
        let todo = await TodoModel.findOne({
            _id:todoId,
        })

        return response(200,false,"todo found successfully",res,undefined,undefined,todo);
    } catch (error) {
        return response(400,true,"todo not found",res,undefined,error);
    }

}
export async function getAllTodo(req:UserInterface,res:Response){
    try {
        console.log("executed");
        
        const isAdmin = req.user.isAdmin;
        if(!isAdmin){
            return response(400,true,"unauthorised",res);
        }
        const todo = await TodoModel.find({});


        return response(200,false,"Todos found",res,undefined,undefined,todo);
    } catch (error) {
        return response(400,true,"todo not found",res,undefined,error);
    }
}

