import express from "express";
import { createTodo, deleteTodo, getAllTodo, getTodoById, updateTodo } from "../controllers/todoController.js";
import { authMiddleware } from "../middlewares/middleware.js";
import { todoBodyValidation, todoParamsIDValidator, todoUpdateBodyValidation } from "../middlewares/validationMiddleware.js";
const router = express.Router();

router.get("/get-all-todo",authMiddleware,getAllTodo);
router.post("/create-todo",authMiddleware,todoBodyValidation,createTodo);
router.put("/update-todo/:id",authMiddleware,todoUpdateBodyValidation,todoParamsIDValidator,updateTodo);
router.delete("/delete-todo/:id",authMiddleware,todoParamsIDValidator,deleteTodo);
router.get("/get-todo/:id",authMiddleware,todoParamsIDValidator,getTodoById);
router.get("/tester/get",(req,res)=>{
    res.send("HELLO");
})

export default router;

