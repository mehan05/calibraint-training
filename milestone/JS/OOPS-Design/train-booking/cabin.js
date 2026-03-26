import { Berth } from "./berth.js";

export class Cabin{
    
    constructor(){
        this.berth = [];

        for(let berth=1;berth<=3;berth++){
            this.berth.push(new Berth());
        }
    }

    getBerthDetails(berthNumber){
        return this.berth[berthNumber];
    }


}
