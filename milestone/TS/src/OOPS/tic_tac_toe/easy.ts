import { checkWinner } from "./utils.js";

export function easyMode(board: string[][]) {
    let emptyPositons:[number,number][] = [];
    if(board){
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[i]![j]==''){
                    emptyPositons.push([i,j]);
                }
            }
        }
    }
    
    let random = Math.floor(Math.random() * emptyPositons.length);
    let [r,c] = emptyPositons[random]!;
    let row = board[r];
    if(row){
        row[c] = "O"
        let gameResult = checkWinner(board);
        emptyPositons=[];
        return gameResult;
    }

    
    
}