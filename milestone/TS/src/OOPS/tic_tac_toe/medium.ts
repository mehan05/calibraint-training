import { easyMode } from "./easy.js";
import { checkWinner } from "./utils.js";
//@ts-nocheck

export function  mediumMode(board:string[][]){
    let res2 = null;
    for(let i=0;i<3;i++){

        res2 = lookForDefend(board,i);    
        if(res2==null){
            res2 = lookToPlaceO(board,i);
        }
        if(res2=="O placed"){
            res2=null;
            return checkWinner(board);
        }
    }
    
    res2 = lookForDiagonal(board);

    if(res2=="O placed"){
        return checkWinner(board);
    }

    return easyMode(board);
 
}


function lookForDefend(board:string[][],i:number){
    let row = board[i];
    let row0 = board[0];
    let row1 = board[1];
    let row2 = board[2];
    if(row && row0 && row1 && row2){
        if(row[0]=="X" && row[1]=="X" && row[2]==""){
            row[2]="O";
            return "O placed";
        }
        else if(row[0]=="X" && row[2]=="X" && row[1]==""){
            row[1]="O";
            return "O placed";
        }
        else if(row[1]=="X" && row[2]=="X" && row[0]==""){
            row[0]="O";
            return "O placed";
        }
        //vertical
        else if(row0[i]=="X" && row1[i]=="X" && row2[i]==""){
            row2[i]="O";
            return "O placed";
        }
        else if(row0[i]=="X" && row2[i]=="X" && row1[i]==""){
            row1[i]="O";
            return "O placed";
        }
        else if(row1[i]=="X" && row2[i]=="X" && row0[i]==""){
            row0[i]="O";
            return "O placed";
        }
    
    }
}

function lookToPlaceO(board:string[][],i:number){
        let row = board[i];
        let row0 = board[0];
        let row1 = board[1];
        let row2 = board[2];
    if(row && row1 && row2 && row0 ){
        if(row[0]=="O" && row[1]=="O" && row[2]==""){
            row[2]="O";
            return "O placed";
        }
        else if(row[0]=="O" && row[2]=="O" && row[1]==""){
            row[1]="O";
            return "O placed";
        }
        else if(row[1]=="O" && row[2]=="O" && row[0]==""){
            row[0] = "O";
            return "O placed";
        }

        else if(row0[i]=="O" && row1[i]=="O" && row2[i]==""){
            row2[i]="O";
            return "O placed";
        }
        else if(row0[i]=="O" && row2[i]=="O" && row1[i]==""){
            row1[i]="O";
            return "O placed";
        }
        else if(row1[i]=="O" && row2[i]=="O" && row0[i]==""){
            row0[i]="O";
            return "O placed";
        }
        

    }
}

function lookForDiagonal(board:string[][]){
    let row0 = board[0];
    let row1 = board[1];
    let row2 = board[2];
    if(row0 && row1 && row2){
        if(row0[2]=="X" && row1[1]=="X" && row2[0]==""){
             row2[0]="O";
             return "O placed";
         }
         else if(row0[2]=="X" && row2[0]=="X" && row1[1]==""){
             row1[1]="O";
             return "O placed";
         }
         else if(row1[1]=="X" && row2[0]=="X" && row0[2]==""){
             row0[2]="O";
             return "O placed";
         }
     
         else if(row0[0]=="X" && row1[1]=="X" && row2[2]==""){
             row2[2]="O";
             return "O placed";
         }
         else if(row0[0]=="X" && row2[2]=="X" && row1[1]==""){
             row1[1]="O";
             return "O placed"
         }
         else if(row1[1]=="X" && row2[2]=="X" && row0[0]==""){
             row0[0]="O";
             return"O placed";
         }
    }
}

