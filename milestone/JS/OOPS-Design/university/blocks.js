import { Floor } from "./floor.js";

export class Block{
    
    constructor(blockName,noOfFloors, department){
        this.blockName = blockName;
        this.noOfFloors = noOfFloors;
        this.department = department;
        this.floors = [];
    }

    createFloors(noOfFloors){
        if(noOfFloors>5){
            return "Cant more than 5 floors";
        }

        for(let floor =0; floor<noOfFloors; floor++){
            this.floors.push(new Floor(floor,this.blockName, this.department));
        }
    }
}