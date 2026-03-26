import { WareHouse } from "./warehouse.js";

export class Company{
    constructor(name){
        this.name = name;
        this.wareHouses = [];
    }

    createWareHouse(noOfWareHouses){
        for(let i=0;i<noOfWareHouses;i++){
            this.wareHouses.push(new WareHouse());
        }
    }

    getGoodsDetails(){
        return this.wareHouses;
    }

}

