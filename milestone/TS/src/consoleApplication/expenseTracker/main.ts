import { Category } from "./enums.js";
import { addExpense } from "./utils.js";

function expenses(){
    // console.log("hello");
    // while(true){
        
    // }
    addExpense({
        title:"hello",
        amount:10,
        category: Category.FOOD
    })
}


expenses()
