import type { Mode } from "./game.js";
import { easyMode } from "./easy.js";
import { mediumMode } from "./medium.js";
import readline from "readline";

export function placeUserX(board: string[][], position: [number, number]) {
  let row = board[position[0]];
  if (row) {
    if (row[position[1]] == "") {
      row[position[1]] = "X";
      return;
    } else {
      return "Position already filled";
    }
  
}
}

export async function getMode(rl: readline.Interface): Promise<any> {
  return new Promise((resolve, reject) => {
    const getInput = () => {
      rl.question(
        'Enter Difficulty Mode ["Easy", "Medium", "Hard"]',
        (modeByUser) => {
          let modeLowercase = modeByUser.toLowerCase();
          if (
            modeLowercase !== "easy" &&
            modeLowercase !== "medium" &&
            modeLowercase !== "hard"
          ) {
            console.log("enter valid input");
            getInput();
            return;
          }
           resolve(modeByUser);
        },
      );
    };

    getInput();
  });
}

export async function getInput(rl: readline.Interface): Promise<any> {
  return new Promise((resolve, reject) => {
    const getInput = () => {
      rl.question("Enter Your Position seperated by space: ", (pos) => {
        if (pos.split(" ").length == 2) {
          resolve(pos.split(" "));
            return;
        }
        console.log("enter valid input");
        getInput();
      });
    };
    getInput();
  });
}

export function printBoard(board: string[][]) {
  console.log("   | 0    1   2");
  console.log("----------------");
  for (let i = 0; i < board.length; i++) {
    if (board[i]) {
      let roww = board[i]!.map((ele) => ele || " ").join(" | ");
      console.log(i, " | ", roww);
    }
  }
}

export function modeSelector(mode: Mode) {
  if (mode) {
    switch (mode) {
      case "easy":
        return easyMode;
      case "medium":
        return mediumMode;
      case "hard":
        console.log("hard");
    }
  }
}

export function checkGameTie(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    let row = board[i];
    if (row) {
      for (let j = 0; j < row.length; j++) {
        if (row[j] == "") {
          return false;
        }
      }
    }
  }
  return true;
}


export function checkWinner(board:string[][]): null | string | undefined{
    let win = null;
    for(let i=0;i<3;i++){
        let row = board[i];
        if(row){
            if(row[0]==row[1] && row[1] == row[2] && row[0]!="")            
            {
                win = row[0];
                break;
            }            
        }
    }

    for(let i=0;i<3;i++){
        let row0 = board[0];
        let row1 = board[1];
        let row2 = board[2];
        if(row0 && row1 && row2){
            if(row0[i]==row1[i] && row1[i] == row2[i] && row0[i]!="")            
            {
                win = row0[i];
                break;
            }            
        }
    }

    let rowDiagonal0 = board[0]; 
    let rowDiagonal1 = board[1]; 
    let rowDiagonal2 = board[2]; 
    if(rowDiagonal0 && rowDiagonal1 && rowDiagonal2){
        if(rowDiagonal0[0]==rowDiagonal1[1] && rowDiagonal1[1] == rowDiagonal2[2] && rowDiagonal0[0]!=""){
            win = rowDiagonal0[0];
        }
        if(rowDiagonal0[2]==rowDiagonal1[1] && rowDiagonal1[1] == rowDiagonal2[0] && rowDiagonal0[2]!=""){
            win = rowDiagonal0[2];
        }
        
    }
    if(win == null && checkGameTie(board)){
        win = "tie";
    }
    return win;



}