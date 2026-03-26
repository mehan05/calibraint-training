// online foood devlivery
class Restarunt {
  constructor(name, location, restaruntID) {
    this.restaruntID = restaruntID;
    this.name = name;
    this.location = location;
    this.activeOrders = [];
  }

  getRestaruntDetails() {
    return `Restarunt Name ${this.name} and location ${this.location}`;
  }

  addOrders(userId, ...foodIds) {
    let order = {
      userId,
      items: [...foodIds],
    };
    this.activeOrders.push(order);
    this.prepareOrders(userId);
  }

  prepareOrders(userId) {
    console.log(`Preparing order for user: ${userId}`);
  }

  removeOrders(userID, ...foodIds) {
    let arr = [];
    for (let i of this.activeOrders) {
      if (i.userId == userID) {
        for (let j of i.items) {
          for (let k of foodIds) {
            if (j !== k) arr.push(j);
          }
        }
      }
    }
    this.activeOrders = arr;
  }

  calculateAmount() {
    let amount = 0;
    for (let i of this.activeOrders) {
      amount += i.items.length;
    }
    return amount;
  }
}

class User {
  constructor(name, phoneNo, userId) {
    this.name = name;
    this.userId = userId;
    this.phoneNo = phoneNo;
    this.orderedFoods = [];
    this.activeOrders = [];
    this.cart = [];
    this.restaruntID = 0;
  }

  placeOrder(...foodIDs) {
    for (let i of foodIDs) {
      this.activeOrders.push(i);
    }
  }

  cancelOrder(...foodID) {
    if (foodID.length <= 1) {
      this.activeOrders = this.activeOrders.filter((food) => foodID != food);
    } else {
      for (let i of foodID) {
        this.activeOrders = this.activeOrders.filter((food) => food != i);
      }
    }
  }

  addToCart(...items) {
    this.cart.push(...items);
  }

  getCartItems() {
    return this.cart;
  }

  updateActiveOrders() {
    this.orderedFoods = [...this.activeOrders];
    this.activeOrders = [];
  }
}

class Delivery {
  constructor(userID) {
    this.collectedOrders = [];
    this.userId = userID;
  }

  collectOrders(...orders) {
    for (let i of orders) {
      this.collectedOrders.push(i);
    }
  }

  deliveeredOrders() {
    this.collectedOrders = [];
  }
}

class Menu {
  constructor(restaruntID) {
    this.menuItems = [];
    this.restaruntID = restaruntID;
  }

  addMenuItems(items) {
    if (!Array.isArray(items)) {
      return "Use array format to add menuitems";
    }
    this.menuItems.push(...items);
  }

  updateMenu(updatedFood) {
    const index = this.menuItems.forEach((ele, index) => {
      if (ele.foodID == updatedFood.foodID) {
        return index;
      }
    });
    this.menuItems[index] = updatedFood;
  }
}

class Payment {
  #paymentID;
  constructor(amount, name) {
    this.#paymentID = 0;
    this.amount = amount;
    this.name = name;
  }

  payAmount(amount) {
    this.#paymentID++;
    this.amount -= amount;
    return this.#paymentID;
  }
}

class Order {
  #orderID;
  constructor(userID, orderID, ...foodIDs) {
    this.items = foodIDs;
    this.#orderID = orderID;
    ((this.userId = userID), (this.payment = 0));
  }

  addPaymentDetails(payment) {
    this.payment = payment;
  }

  getOrderDetails() {
    return {
      orderID: this.#orderID,
      userID: this.userId,
      items: this.items,
      payment: this.payment,
    };
  }
}

class OrderingMaster {
  restarunts = [];
  users = [];
  menuItems = [];
  orders = [];
  delivery = [];

  addRestarunts(name, location, id) {
    const restarunt = new Restarunt(name, location, id);
    this.restarunts.push(restarunt);
  }

  addUsers(name, phoneNo) {
    const user = new User(name, phoneNo, this.users.length);
    this.users.push(user);
  }

  addMenuItems(restaruntID, items) {
    let menu = new Menu(restaruntID);
    menu.addMenuItems(items);
    this.menuItems.push(menu);
  }

  addDelivery(userID) {
    let delivery = new Delivery(userID);
    this.delivery.push(delivery);
  }

  findDelivery(userID) {
    let delivery = this.delivery.find((val) => {
      return val.userId == userID;
    });
    return delivery;
  }

  addItemsToCart(userId, ...items) {
    let [user] = this.users.filter((user) => user.userId == userId);
    user.addToCart(...items);
  }

  findUser(userID) {
    let user = this.users.find((val) => {
      return val.userId == userID;
    });
    return user;
  }

  findRestarunts(restaruntId) {
    let res = this.restarunts.find((ele) => {
      return (ele.restaruntID = restaruntId);
    });
    return res;
  }

  placeFoodOrder(userID, restaruntID) {
    let user = this.findUser(userID);
    user.restaruntID = restaruntID;
    let foodIds = user.getCartItems();
    let restarunt = this.findRestarunts(restaruntID);
    let amount = restarunt.calculateAmount();
    let payment = new Payment(amount, user.name);
    payment.payAmount(amount);
    let order = new Order(userID, this.orders.length, ...foodIds);
    order.addPaymentDetails(payment);
    this.orders.push(order);
    user.placeOrder(...foodIds);
    restarunt.addOrders(userID, ...foodIds);
    this.addDelivery(userID);
    let delivery = this.findDelivery(userID);
    delivery.collectOrders(...foodIds);
    console.log("user Details", user);
    console.log("restarunt details", restarunt);
  }

  cancelOrder(userID, ...foodIDs) {
    let arr = [];
    let user = this.findUser(userID);
    let res = this.findRestarunts(user.restaruntID);
    user.cancelOrder(...foodIDs);
    res.removeOrders(userID, ...foodIDs);

    for (let i of this.orders) {
      if (i.userID != userID) arr.push(i);
    }

    this.orders = arr;
  }

  collectOrdersAtLocation(userID) {
    let delivery = this.findDelivery(userID);
    let user = this.findUser(userID);
    user.updateActiveOrders();
    delivery.deliveeredOrders();
    delivery.userID = 0;
  }
}

const master = new OrderingMaster();
master.addRestarunts("Burger King", "Delhi", 1);
master.addRestarunts("Pizza Hut", "Gurgaon", 2);

master.addUsers("Rohit", 1234567890);
master.addUsers("Rohit", 1234567890);

// console.log(master.users);
master.addMenuItems(0, [101, 102, 103]);
master.addMenuItems(1, [201, 202, 203]);

master.addItemsToCart(0, 101, 102, 103);
master.addItemsToCart(1, 201, 202, 203);

master.placeFoodOrder(0, 1);
master.placeFoodOrder(1, 2);

master.collectOrdersAtLocation(0, 101, 102, 103);
master.collectOrdersAtLocation(1, 201, 202, 203);

// master.cancelOrder(0,101,102,103);
// master.cancelOrder(1,201,202,203);
