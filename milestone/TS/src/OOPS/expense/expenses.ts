import type { Balance } from "./balance.js";
import { ExpenseParticipants } from "./expenseParticipants.js";
import { SplitManager } from "./split.js";
import { Split } from "./splitEnum.js";
import type { User } from "./User.js";


export class Expense{
    static ExpensesCounter  =0;
    groupID:number;
    paidByID:number;
    amount:number;
    name:string;
    id:number;
    participants: Map<number,ExpenseParticipants>;
    allPaid:boolean;
    splitType: Split;

    constructor(groupID:number,paidByID:number,amount:number,name:string, splitType:Split){
        Expense.ExpensesCounter++;
        this.groupID = groupID;
        this.paidByID = paidByID;
        this.amount = amount;
        this.name = name;
        this.id = Expense.ExpensesCounter;
        this.participants = new Map();
        this.allPaid = false;
        this.splitType = splitType;
    }

    addParticipant(userId:number,balance:Balance){
        let expenseParticipant = new ExpenseParticipants(this.groupID,this.id,userId,false,balance);
        this.participants.set(userId,expenseParticipant);
    }

    splitBalances(customSplitAmount:{[key:string]:number}){
        if(this.splitType==Split.EQUALSPLIT){
            let splitObject = SplitManager.splitCreator(this.splitType);
            for(let [k,v] of this.participants){
                splitObject.splitExpenses(this.participants,this.amount,0,0)
                v.balance.fromUser = v.userID;
                v.balance.toUser = this.paidByID;
            }
        }
        else if(this.splitType==Split.CUSTOMSPLIT ){
            let splitObject = SplitManager.splitCreator(this.splitType);
            let amountCounter = 0;
            for(let [k,v] of this.participants){
                amountCounter+= customSplitAmount[k]!
                splitObject.splitExpenses(this.participants,customSplitAmount[k]!,v.userID,0)
                v.balance.fromUser = v.userID;
                v.balance.toUser = this.paidByID;
            }
            if(amountCounter!=this.amount){
                console.log("amount not equal");
                return;
            }
        }
        else if(this.splitType==Split.PRECENTAGESPLIT){
            let splitObject = SplitManager.splitCreator(this.splitType);
            for(let [k,v] of this.participants){
                splitObject.splitExpenses(this.participants,this.amount,v.userID,customSplitAmount[k]!)
                v.balance.fromUser = v.userID;
                v.balance.toUser = this.paidByID;
            }
        }

    }

    checkAllPaid(){
        let allPaidChecker = true;
        for(let [_,v] of this.participants){
            if(v.paidStatus==false){
                allPaidChecker = false;
                break;
            }
        }
        return allPaidChecker;
    }

    updateBalances(userId:number, amount:number){
        let expenseParticipant = this.participants.get(userId);
        if(expenseParticipant && expenseParticipant.balance!=undefined){
            if(amount == expenseParticipant.balance.amount){
                return "enter valid amount";
            }
            expenseParticipant.balance.amount = 0;
            expenseParticipant.paidStatus = true;
            let allPaidCheck = this.checkAllPaid();
            this.allPaid = allPaidCheck ? true :false;
        }
        else{
            return "Balance not exist in ExpenseParticipant Classs"
        }        
    }




}