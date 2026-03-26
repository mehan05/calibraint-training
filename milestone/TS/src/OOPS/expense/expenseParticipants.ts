import type { Balance } from "./balance.js";

export class ExpenseParticipants{
    groupID:number;
    expensesID:number;
    userID:number;
    paidStatus:boolean
    balance:Balance;
    constructor(groupID:number,expensesID:number,userID:number, paidStatus:boolean,balance:Balance){
        this.groupID = groupID;
        this.expensesID = expensesID;
        this.userID  = userID;
        this.paidStatus = paidStatus;
        this.balance = balance;
    }   

}