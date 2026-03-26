import {  NextFunction, Request, Response } from "express";
import { body, validationResult ,param} from "express-validator";
import { validationResponse } from "../utils/validationResponse.js";


    export const userBodyValidation =  [

        body("username")
        .notEmpty().withMessage("username is required")
        .isLength({min:5,max:10}).withMessage("username length must, stay under 5 to 10")
         .isAlphanumeric().withMessage("username can only contain numbers and chracter"),
    
        body("password")
        .notEmpty().withMessage("Password is required")
        .isLength({min:8,max:20}).withMessage("Password length must stay between 8 and 20"),
        
        body("isAdmin")
        .optional()
        .isBoolean()
        .withMessage("isAdmin must be boolean"),

        (req:Request, res:Response, next:NextFunction)=>{
            return validationResponse(req,res,next)
        }
    ];


    export const todoBodyValidation = [
        body("title")
        .notEmpty().withMessage("title must be  required")
        .isLength({min:10,max:100}).withMessage("title length should be under 50 to 100 characters"),


        body("description")
        .notEmpty().withMessage("password is not required")
        .isLength({min:10,max:100}).withMessage("the description length should lie under 300 and 500"),


        body("isCompleted")
        .optional()
        .isBoolean()
        .withMessage("Type of isCompleteed must be boolean"),

        (req:Request,res:Response,next:NextFunction)=>{
           return  validationResponse(req,res,next)
        }
    ];

    export const todoUpdateBodyValidation = [
        body("title")
        .optional()
        .isLength({min:10,max:100}).withMessage("title length should be under 50 to 100 characters"),


        body("description")
        .optional()
        .isLength({min:10,max:50}).withMessage("the description length should lie under 300 and 500"),


        body("isCompleted")
        .optional()
        .isBoolean()
        .withMessage("Type of isCompleteed must be boolean"),

        (req:Request,res:Response, next:NextFunction)=>{
            return validationResponse(req,res,next)
        }
    ];


    export const todoParamsIDValidator = [
        param("id")
        .notEmpty().withMessage("todo params id should not be empty"),

          (req:Request,res:Response, next:NextFunction)=>{
            return validationResponse(req,res,next)
        }
        
    ]

