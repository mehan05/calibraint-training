import express from "express";
import { getAllUsers, getUserById, loginUser, registeruser } from "../controllers/userControllers.js";
import { userBodyValidation } from "../middlewares/validationMiddleware.js";
import { authMiddleware } from "../middlewares/middleware.js";
const router = express.Router();


router.post("/register-user",userBodyValidation,registeruser);
router.post("/login-user",loginUser);
router.get("/get-all-user",authMiddleware,getAllUsers);
router.get("/get-user/:id",authMiddleware,getUserById)





export default router;

