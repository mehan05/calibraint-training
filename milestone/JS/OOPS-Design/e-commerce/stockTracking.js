
export class StockTracking{
    constructor(productID,quantity,wareHouseID, inventoryID, stockStatus){
        this.productID = productID;
        this.quantity = quantity;
        this.wareHouseID = wareHouseID;
        this.inventoryID = inventoryID;
        this.stockStatus = stockStatus;
    }

    getProductStockDetails(){
        return {
            productID: this.productID,
            quantity: this.quantity,
            wareHouseID: this.wareHouseID,
            inventoryID: this.inventoryID,
            stockStatus: this.stockStatus
        }
    }
      

}