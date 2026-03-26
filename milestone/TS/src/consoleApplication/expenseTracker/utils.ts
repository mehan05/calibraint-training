import path from "path";
import type { ExpenseInterface } from "./interface.js";
import fs from "fs";
export function  addExpense(expense:Pick<ExpenseInterface, 'title' | 'amount' | 'category'>){
    console.log("expense added");
    const filePath = path.join(process.cwd(),"consoleApplication","expenseTracker","expense.json");
    
    console.log(filePath);

    fs.appendFileSync(filePath,JSON.stringify(expense));



}