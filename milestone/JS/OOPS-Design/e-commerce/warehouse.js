import { Inventory } from "./inventory.js";

export class WareHouse{
    static WareHouseCounter = 1;

    constructor(){
        this.wareHouseId = WareHouse.WareHouseCounter++;
        this.inventories = [];
        this.wareHouseName = `W-${this.wareHouseId}`
    }

    addInventories(noOfInventories){
        for(let i=0;i<noOfInventories;i++){
            this.inventories.push(new Inventory());
        }
    }

}