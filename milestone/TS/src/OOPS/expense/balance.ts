
export class Balance{
    static BalanceCounter = 0;
    id:number;
    fromUser:number;
    toUser:number;
    groupID:number;
    expensesID:number;
    amount:number=0;


    constructor( fromUserID:number, toUserID:number, groupID:number,expensesID:number ){
        this.id = Balance.BalanceCounter++;
        this.fromUser = fromUserID;
        this.toUser = toUserID;
        this.groupID = groupID;
        this.expensesID = expensesID;

    }    
    
}