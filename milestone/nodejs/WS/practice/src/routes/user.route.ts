import express from "express";
import { UserControllers } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { MessageControllers } from "../controllers/message.controller.js";

const UserRouter = express.Router();
const userController = new UserControllers();

UserRouter.get("/get-users",userController.getAllUsers.bind(userController))

UserRouter.post("/auth/register",authMiddleware,userController.registerUser.bind(userController));


export default UserRouter;