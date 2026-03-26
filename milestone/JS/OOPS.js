// // oops is intruduced because in early days, when the code base grows, it gets messy,more functions, variables, more number of arguments, multiple teams working across the same codebase, so if a changes is made in a code by a team the other teams using it will, not notice it, so oops will help to opganise data members and function inside a  class, its easy to maintain


// // we can decalere classes in two ways 
// // class declaration
// // class expression

// //class declaration is a normal class declaration with class method

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//    speak(){
//         return `speak from: ${this.name}`
//     } // if no return statement it will return undefined
// }

// let dog = new Animal("dog");
// console.log(dog.speak());


// // class expression, literally we can store a class inside a variable, and we can create it with name and without name

// let car = class{
//     constructor(year,model){
//         this.year = year;
//         this.model = model
//     }

//     getModel(){
//         return `car model: ${this.model}`
//     }
    
//     getYear(){
//         return `car year: ${this.year}`
        
//     }
// }

// let skoda = new car(2026,"skoda_1");
// console.log(skoda.getModel())
// console.log(skoda.getYear())


// let bike = class Gear{
//     constructor(gear){
//         this.gear = gear
//     }

//     getGear(){
//         return `gear: ${this.gear}`
//     }
// }
// let pulsar = new bike("pulsar");
// console.log(pulsar.getGear())


// // Diff of named and unnamed, class expression, 

// // example using unamed class expression
// let val1 = class{
//      count(n){
//         if(n==0) return;
//         console.log(n);
//         new val1().count(n-1)
//     }
// }
// let ans = val1;
// new ans().count(5);

// //example using named class expression
// let val2 = class test123{
//     count(n){
//         if(n==0) return;
//         console.log(n);
//         new test123().count(n-1)
//     }
// }
// // let ans1 = new val2().count(5);


// //self invoking class expression
// let val3 = new (class{
//     constructor(name){
//         this.name = name
//     }

//     getName(){
//         return `name123: ${this.name}`
//     }
// })("mehan")

// console.log(val3.getName())

console.log("----------------------Inheritance---------------------")

// // Inheritance : inheritance is a concept that allows you to create a new class based on an existing class, and it will inherit all the properties and methods from the parent class
// class Car{
//     constructor(model, year){
//         this.model = model;
//         this.year  = year
//     }

//     getCarDetails(){
//         return `Car Model:${this.model}, Year: ${this.year}`
//     }

// }

// class ElectricCar  extends Car{

//     constructor(model,year, batterCapacity){
//         super(model,year)
//         this.batterCapacity = batterCapacity;
//     }

//     getCarDetailsChild(){
//         return `Car Model:${this.model}, Year: ${this.year}, capacity: ${this.batterCapacity}`
//     }

// }

// let EvCar = new ElectricCar("BYD", 2012, "500000mah")

// console.log(EvCar.getCarDetails());
// console.log(EvCar.getCarDetailsChild());


// NOTE----
// let obj1 = {
//     name:"Mehan"
// }

// let obj2 = Object.create(obj1);
// obj2.greet = function(){
//     console.log("hello")
// }

// obj1.greet(); // error greet not defined

// // Because inheritance direction is one way

// // child can access parent
// // parent cannot access child
// //because parent has child reference, but chjld not has parent reference

// // there are types of inheritance

// // prototype inheritance, this is athe old way of inheritance, before es6 was invented we are using this, using this we can create ont object or method, and use it to another classes

// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.speak = function(){
//     console.log(`speaking from: ${this.name}`)
// }

// function Dog(name){
//     Animal.call(this,name);
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.bark = function(){
//      console.log(`barking from: ${this.name}`)
// }

// const myDog = new Dog("test");
// myDog.speak();
// myDog.bark()


// // Mixin Prototype, it is simply adding a function object to a constructor functioon 

// function Bike(name){
//     this.name = name;
// }

// let one = {
//     price(price){
//         return `The price of ${this.name} is ${price}`
//     }
// }

// let two = {
//     model(modelName){
//         return `The modal of ${this.name} is ${modelName}`
//     }
// }


// Object.assign(Bike.prototype,one,two);
// let apache = new Bike("Apache");
// console.log(apache.price(50000));
// console.log(apache.model("Apache"));


// combination Inheritance, here we are 
/**
 * 1) use constructor for properties
 * 2) use prototype for functions
 * 3) while using normal Object.create in child objects all the child objects share the same parent instance
 * 4) but here we are using Parent.call() so each child gets their own, parent instance
 * 5) but here the parent is executed two times, this will cause memory issues
 */

function Parent(name){
    this.name = name
}
Parent.prototype.greet = function(){
    return `hello, ${this.name}`
}

function Child(name){
    Parent.call(this,name);
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;


let child1 = new Child("mehan");
let child2 = new Child("test");
console.log(child1.greet());
console.log(child2.greet())




// Parasitic Inheritance
// wraping the prototype inheritance, with a function.
// simply means, we haave a original object, we create a opy of that object, and do some modifications in it, without changing the original object
function ParasaticFunction(obj){
    let obj1 = Object.create(obj);
    obj1.greet = function(){
        return `hello,${obj1.name}`
    }
    return obj1;
}
let originalObject = {name:"mehan"}
let copyObject = ParasaticFunction(originalObject)

console.log(originalObject)

// combination + parasatic inheritance
/**
 * 
 * Copy only prototype
    Call constructor only once
 */
function Parent12(name){
    this.name = name;
}

Parent12.prototype.greet = function(){
    return  `hello, ${this.name}`
}

function Child12(name){
    Parent12.call(this,name);

}

Child12.prototype = Object.create(Parent12.prototype);
Child12.prototype.constructor = Child12;

let child123 = new Child12("mehan")
console.log(child123.greet());







// let obj1 = {
//     name:"mehan",
//     age: 123,
//     greet(){
//         return `hello ${this.name}`
//     }
// }
// let obj2 = Object.create(obj1); // this will create aa new copy of that object, so changing the value from copy will not change the original value

// obj2.name = "test"
// console.log(obj2.age);
// console.log(obj1.greet());


// let  grandParent={
//     property1:"val1"
// }

// let parent= Object.create(grandParent);
// parent.property2 = "val2";


// let child = Object.create(parent);
// child.property3 = "val3";


// console.log(parent.property1);
// console.log(grandParent.name);// undefined 
//  here the difference between defineProperties and create is , using create we can inherit(adding parent to child prototype) the parent to child    
// Important:

// defineProperty default = FALSE for everything

// Normal object default = TRUE

// console.log(child.property1); // it will show val1 , because while we do Object.create the internally the parent = Object.create(grandParent) means grandParent is added to the prototype of the parent object, and parent is added into child prptotype, if child has no property1, it will check parent , if parent dosen't have it it will check grandParent. it will found it on parent it stops checking

// let  grandParent={
//     property1:"val1"
// }

// let parent= Object.create(grandParent,{
//     name:{
//         value:"mehan",
//         writable:true,
//         enumerable:true,
//     },
//     age:{
//         value:2423432
//     }
// });

let parent = {
    x:10
}

let child = Object.create(parent);
child.x = 123;
console.log(child.x, parent.x) // 123,10
console.log("--------------------------------Abstraction----------------------")

// // Abstraction : abstraction is a concept that allows you to hide unwanted complex logic and show only the required , details
// class Cofee{
//     constructor(quantity){
//         this.quantity = quantity;
//     }

//     #headWater(){
//         return "Heat water";
//     }

//     #crushCofeeBeans(){
//         return "Crush cofee beans"
//     }

//     #mixAllThings(){
//         return "Mix all things"
//     }

//     makeCofee(){
//         console.log("preparing cofee for ",this.quantity);
//         console.log(this.#headWater());
//         console.log(this.#crushCofeeBeans());
//         console.log(this.#mixAllThings())
//     }
// }

// const cofee = new  Cofee(2);
// // cofee.makeCofee();
// // here we are hiding the complexity from the user, user dont know to heat , crush , mixallthings ,  he just calls makeCofee .

console.log("--------------------------------Encapsulation----------------------")

// // Encapsulation
// // encapluation means hiding the important data, outside the class
// // here in this code we can cannot access the data from outside, we can only access the data from inside,

// // abstration => hiding methods and properties from outside
// // encapsulation => hiding data from outside

// class BankAccount{
//     #accountNumber;
//     #accountHolderName;
//     #balance;

//     constructor(accountNumber,accountHolderName,balance){
//         this.#accountHolderName = accountHolderName;
//         this.#accountNumber = accountNumber;
//         this.#balance  = balance;       
//     }

//     #getAccountDetails(){
//         return `Account Number: ${this.#accountNumber}, Account Holder Name: ${this.#accountHolderName}, Balance: ${this.#balance}`
//     }

//     deposit(amount){
//         this.#balance += amount;
//         console.log("Amount Deposited");
//         return this.#getAccountDetails();
//     }

//     withdraw(amount){
//         if( this.#balance >= amount){
//             this.#balance -= amount;
//             console.log("Amount withdrawed successfully");
//             return this.#getAccountDetails();
//         }
//         return "Insufficient balance";
//     }

//     test(){
//         return "this is test"
//     }
// }
// let bankAccount  = new  BankAccount(12312123,"Mehan",10000);
// console.log(bankAccount.deposit(500));
// console.log(bankAccount.withdraw(500));
// console.log(bankAccount.test());

// // bankAccount.getAccountDetails(); // gives error, because it is a private property


console.log("----------------------------Polymorphism-------------------------")

// polymorphism simply means the same function with different signature calls many times, 
// we can do two types of polymorphism
// 1. method overloading
// 2. method overriding

// method overloading
// method overloading simply means same function name but different arguments
function sum(a,b){
    if(b==undefined){
        return a+a;
    }
    return a+b;
}

// console.log(sum(2));
// console.log(sum(2,5));


//method overriding, it simply means that, child classes have the same name of parent function, but the behaviour of these function will change based on their declaration in child

class Car{
    getTopSpeed(){
        return "240km/hr"
    }
}

class Bike extends Car{
    getTopSpeed(){
        return "120km/hr"
    }
}

class Cycle extends Car{
    getTopSpeed(){
        return "10km/hr";
    }
}

let cycle = new Cycle();
console.log(cycle.getTopSpeed())

let bike  = new Bike();
console.log(bike.getTopSpeed());



class User {
  constructor(name) {
    this._name = name; // internal storage
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 3) {
      console.log("Name too short");
      return;
    }
    this._name = value;
  }
}

const u = new User("Mehan");

console.log(u.name); // getter runs // for each u.name the get function calls
u.name = "Ab";       // setter runs
u.name = "Khalid";   // setter runs
console.log(u.name);

