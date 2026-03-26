import { Cabin } from "./cabin.js";

export class Compartment{
    static compartmentCounter = 1;
    constructor( ){ 
        this.cabins=[];
        this.compartmentNumber = Compartment.compartmentCounter++;

          for(let cabin=1;cabin<=5;cabin++){
            let cabin = new Cabin();
            this.cabins.push(cabin);
        }
    }   
}