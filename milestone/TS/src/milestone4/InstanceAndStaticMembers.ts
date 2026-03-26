// Instance data members
class TestClass{
    number:number; // unique to each object created using TestClass
    constructor(number:number){
        this.number = number;
    }

    getNumber(){
        console.log("instance member",this.number);
    }

}

let testClass1 = new TestClass(1);
testClass1.getNumber();

// static data members
class Bank{
    static bankName:string; 
    private balance:number = 0;

    
    // private balance:number; // this gives error because, in runtime balance set to undefiened, but its type is number, so it gives error


    // if not assigning value at declaration we can use ! and opriaonal parameter to (?) fix the error 
    // private balance!:number; 
    // private balance?:number; 
    
    constructor(){
        Bank.bankName =  "SBI" // static data members can only accessed using class name, and its common to all objects.
    }

    getBankName(){
        console.log("static member",Bank.bankName);
    }
    updateBalance(balance:number ){
        this.balance = balance;
    }

}
let bank = new Bank();
let bank1 = new Bank();
bank.getBankName();
bank1.getBankName();