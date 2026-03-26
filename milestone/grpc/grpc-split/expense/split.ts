import type { ExpenseParticipants } from "./expenseParticipants.js";
import  { Split } from "./splitEnum.js";

interface SplitInterface{
    splitExpenses(expenseParticipants:Map<number,ExpenseParticipants>, amount:number,userID?:number,percentage?:number):void;
}

class EqualSplit implements SplitInterface{
    
    splitExpenses(expenseParticipants:Map<number,ExpenseParticipants> ,amount:number): void| string{
       if(amount<=0){
        return "Enter Valid Amount";
       }
        let noOfParcipants = expenseParticipants.size;

        expenseParticipants.forEach(ele=> ele.balance.amount = amount/noOfParcipants );
       
    }

}

class CustomSplit implements SplitInterface{
    splitExpenses(expenseParticipant:Map<number,ExpenseParticipants>, amount:number,userId:number): void {
       let participantExpense = expenseParticipant.get(userId)
       if(participantExpense){
        participantExpense.balance.amount = amount
       }
       else {
         console.log("participant not found");
         return;
       }
    }

}

class Precentage implements  SplitInterface{
    splitExpenses( expenseParticipant:Map<number,ExpenseParticipants>, totalAmount:number,userId:number,percentage:number): void {
        let amount = (percentage/100)*totalAmount;
         let participantExpense = expenseParticipant.get(userId)
       if(participantExpense){
        participantExpense.balance.amount = amount
       }
       else {
         console.log("participant not found");
         return;
       }

    }

}

export class SplitManager{
    static splitCreator(splitType:Split){
        if(splitType === Split.CUSTOMSPLIT){
            return new CustomSplit()
        }
        else if(splitType == Split.EQUALSPLIT){
            return new EqualSplit();
        }
        else if(splitType == Split.PRECENTAGESPLIT){
            return new Precentage();
        }

        throw new Error("Unknown Splitype");
    }
}

