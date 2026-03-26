import readline from "readline";
import { checkGameTie, getInput, getMode, modeSelector, placeUserX, printBoard } from "./utils.js";
let board = [
    ['','',''],
    ['','',''],
    ['','','']
];
export type Mode  = "easy" | "medium" | "hard" ;
let mode:Mode | null= null;
let method;
let input:[number,number];
let gameStatus:string;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


export async function game(method:any){
  while(true){
    if(mode == null){

        mode = await getMode(rl);

    }
      console.log("\n")
      printBoard(board);
      console.log("\n")

         if(mode!=null)
         input= await  getInput(rl);
    
  
   if(input){
      let tempValue:number[]= input.map((ele)=> Number(ele));
      input = [tempValue[0]!,tempValue[1]!];
   }
 
   if(!( input! instanceof Array)){
     console.log("Input not valid");
     break;
   }
 
   let placeUser = placeUserX(board, input);
   if(placeUser=="Position already filled"){
     console.log(placeUser);
     continue;
   }
   

   method =  modeSelector(mode!); 
   if(method){
    gameStatus =  method(board);
   }


   console.log("game statis",gameStatus);
   if(gameStatus =="O"){
      console.log("\n")
      printBoard(board);
      console.log("\n")
    return "Computer Wins";
   }
   else if(gameStatus =="X")
   {
      console.log("\n")
      printBoard(board);
      console.log("\n")
    return "Uses Wins";
   }
   else if(gameStatus=="tie"){
      console.log("\n")
      printBoard(board);
      console.log("\n")
    return "Tie";
   }
 
  }
} 


async function main(method:any){
  let gameStatus = await game(method);
  console.log(gameStatus);
}

main(method);




