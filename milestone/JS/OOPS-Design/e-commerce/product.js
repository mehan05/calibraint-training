import { StockTracking } from "./stockTracking.js";

export class Product extends StockTracking{
    static productCounter = 0
    constructor(name,price,quantity,category){
        super();
        this.productId = Product.productCounter++;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.category = category;
  }

    getProductDetails(){
        return {
            productId: this.productId,
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            category: this.category,
            productStockDetails:  this.getProductStockDetails()
        }
    }


}