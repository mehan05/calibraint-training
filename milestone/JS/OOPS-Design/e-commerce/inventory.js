import { Product } from "./product.js";
import { StockTracking } from "./stockTracking.js";

export class Inventory {
  static inventoryCounter = 1;
  static productCounter = 1;
  constructor() {
    this.inventoryId = Inventory.inventoryCounter++;
    this.products = new Map();
    this.stockTracking = new Map();
  }

  addProducts(name, price, quantity, category) {
    Inventory.productCounter++;
    this.stockTracking.set(
      Inventory.productCounter,
      new StockTracking(Inventory.productCounter, quantity),
    );
    this.products.set(
      Inventory.productCounter,
      new Product(name, price, quantity, category),
    );
  }
}
