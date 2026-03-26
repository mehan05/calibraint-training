import type { Category } from "./enums.js";

export interface ExpenseInterface{
    id:number,
    title:string,
    amount:number,
    category: Category,
    date:Date
}