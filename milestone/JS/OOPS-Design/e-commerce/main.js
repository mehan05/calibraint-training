import { Category } from "./cateogry.js";
import { Company } from "./company.js"

class Main{
    company
    category
    constructor(){
        this.company = new Company("ABC Company");
        this.categories = [];
    }



    createWareHouse(noOfWareHouses){
        this.company.createWareHouse(noOfWareHouses);
    }

    createInventory(wareHouseId,noOfInventories){
        wareHouseId-=1
        this.company.wareHouses[wareHouseId].addInventories(noOfInventories);
    }


    addProduct(wareHouseId,inventoryId, product, category){
        wareHouseId-=1;
        inventoryId-=1;
        let categoryData = new Category(category.name,category.description);
        this.categories.push(categoryData);
        product.category = categoryData;

        this.company.wareHouses[wareHouseId].inventories[inventoryId].addProducts(product.name,product.price,product.quantity,product.category,wareHouseId,);
    }

    getFullGoodsDetails(ival){
        return this.company.getGoodsDetails();
        // for(let i of this.company.wareHouses){
        //     if(i instanceof Array){
        //         this.getFullGoodsDetails(i)
        //     }
        // }
    }

}


let main = new Main();
main.createWareHouse(5);
main.createInventory(1,5);
main.createInventory(2,5);
main.createInventory(3,5);
main.createInventory(4,5);
main.createInventory(5,5);

main.addProduct(1,1,{name:"Shoes", price:1000, quantity:10}, {name:"Clothing", description:"Clothing"});

console.log(main.getFullGoodsDetails());
