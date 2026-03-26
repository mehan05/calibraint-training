import { Seat } from "./seat.js";

export class Berth{
      static berthType = ["L","M","U"];
    constructor(){
        this.leftBerth = [];
        this.rightBerth = [];
        this.sideBerth = [];

        for(let seat = 0;seat<3;seat++){
           this.leftBerth.push(new Seat(Berth.berthType[seat]));
           this.rightBerth.push(new Seat(Berth.berthType[seat]));
        }

        for(let seat=0;seat<3;seat++){
            if(seat==1){
                continue;
            }
            this.sideBerth.push(new Seat(Berth.berthType[seat]));
        }
    }   

}

