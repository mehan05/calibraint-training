console.log("----------------------Inheritance---------------------")

// // Inheritance : inheritance is a concept that allows you to create a new class based on an existing class, and it will inherit all the properties and methods from the parent class
class Car{
    constructor(model, year){
        this.model = model;
        this.year  = year
    }

    getCarDetails(){
        return `Car Model:${this.model}, Year: ${this.year}`
    }

}

class ElectricCar  extends Car {

    constructor(model,year, batterCapacity){
        super(model,year)
        this.batterCapacity = batterCapacity;
    }

    getCarDetailsChild(){
        return `Car Model:${this.model}, Year: ${this.year}, capacity: ${this.batterCapacity}`
    }

}

let EvCar = new ElectricCar("BYD", 2012, "500000mah")

console.log(EvCar.getCarDetails());
console.log(EvCar.getCarDetailsChild());


// NOTE----
let obj1234 = {
    name:"Mehan"
}

let obj2 = Object.create(obj1234);
obj2.greet = function(){
    console.log("hello")
}

obj1234.greet(); // error greet not defined

// Because inheritance direction is one way

// // child can access parent
// // parent cannot access child
// //because parent has child reference, but chjld not has parent reference

// // there are types of inheritance

// // prototype inheritance, this is athe old way of inheritance, before es6 was invented we are using this, using this we can create ont object or method, and use it to another classes

function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(`speaking from: ${this.name}`)
}

function Dog(name){
    Animal.call(this,name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
     console.log(`barking from: ${this.name}`)
}

const myDog = new Dog("test");
myDog.speak();
myDog.bark()


// // Mixin Prototype, it is simply adding a function object to a constructor functioon 

function Bike(name){
    this.name = name;
}

let one = {
    price(price){
        return `The price of ${this.name} is ${price}`
    }
}

let two = {
    model(modelName){
        return `The modal of ${this.name} is ${modelName}`
    }
}


Object.assign(Bike.prototype,one,two);
let apache = new Bike("Apache");
console.log(apache.price(50000));
console.log(apache.model("Apache"));


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







let obj1 = {
    name:"mehan",
    age: 123,
    greet(){
        return `hello ${this.name}`
    }
}
let obj2 = Object.create(obj1); // this will create aa new copy of that object, so changing the value from copy will not change the original value

obj2.name = "test"
console.log(obj2.age);
console.log(obj1.greet());


let  grandParent={
    property1:"val1"
}

let parent= Object.create(grandParent);
parent.property2 = "val2";


let child = Object.create(parent);
child.property3 = "val3";


console.log(parent.property1);
console.log(grandParent.name);// undefined 
//  here the difference between defineProperties and create is , using create we can inherit(adding parent to child prototype) the parent to child    
// Important:

// defineProperty default = FALSE for everything

// Normal object default = TRUE

console.log(child.property1); // it will show val1 , because while we do Object.create the internally the parent = Object.create(grandParent) means grandParent is added to the prototype of the parent object, and parent is added into child prptotype, if child has no property1, it will check parent , if parent dosen't have it it will check grandParent. it will found it on parent it stops checking

let  grandParent1={
    property1:"val1"
}

let parent= Object.create(grandParent1,{
    name:{
        value:"mehan",
        writable:true,
        enumerable:true,
    },
    age:{
        value:2423432
    }
});

let parent = {
    x:10
}

let child = Object.create(parent);
child.x = 123;
console.log(child.x, parent.x) // 123,10
console.log