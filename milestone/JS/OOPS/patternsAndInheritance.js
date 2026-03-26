

// facroty pattern
function createObject()
{
    return {
        name:"mehan",
        age:12
    }


}
const o1 = createObject();
// console.log(o1)
// draw back, for every function call it created a pbject, its is not memoery efficient

// constructor patter, invented to better code redability
function ConstructorPattern(){
        this.name = "mehan";
        this.age = 234
}
let o2 = new ConstructorPattern();
// console.log(o2);
// still have memory issuse


// prototype pattern
function Prototype(name){
    this.name = name
}

Prototype.prototype.showName = function(){
    console.log(this.name);
}

Prototype.prototype.skills=["mehan","mean1"];

let p1 = new Prototype("mehan");
let p2 = new Prototype("test");

// p1.showName();
// console.log(p2.skills);
// console.log(p1.skills);
// here both p1 and p2 share same skills , we dont want that

// Combination constructor/ Prototype pattern,  simply keep the instance data inside constructor
function Combination(name,...args){
    this.name = name;
    this.skills = [...args]
}

Combination.prototype.getSkills = function(){
    return this.skills;
}

let p3 = new Combination("mehan","js","html");
let p4 = new Combination("mehan123","js","html","css");

console.log(p3.getSkills())
console.log(p4.getSkills())
// now each instance have seperate, skills


// Dynamic pattern
function Dynamic(name){
    this.name = name;
    if(typeof this.showName != "function"){
        Dynamic.prototype.showName = function(){
            return this.name;
        }
    }
}
let p5 = new Dynamic("mehan");
console.log(p5.showName()); // here the function is created at runtime, it came because better readability


// INHERITANCE
// Prototype chaining

function Animal(name){  
    this.name  = name;
}

Animal.prototype.sound = function(){
    return "Meoww";
}

function Cat(){}

Cat.prototype = new Animal("cat");
let cat1 = new Cat();

// console.log(cat1.sound());
// here the sound method is inherited into cat's ptototype
// drawback: parent constructor runs two times, 

// Constructor Stealing, 
function Vehicle(name){
    this.name  = name;
}

function Bike(name){
    Vehicle.call(this,name)
}

let b1 = new Bike("bike");
// console.log(b1.name);
// Here parent constructor runs only once but we cant share prototype functions 


// Combination ,
function Vehicle1(name){
    this.name  = name;
}

function Bike1(name){
    Vehicle1.call(this,name)
}

Bike1.prototype = new Vehicle1();
Bike1.prototype.constructor = Bike1;

let b2 = new Bike1("bike1");
console.log(b2.name); // now we can share prototype, but here the Vehicle1 constructor runs twice, 


// so we can use parasatic combination inheritance
// Just add Object.create(Vehicle) instead of new Vehicle1()


// call, lets us manually set this
// execute the function immediately
// arguments are passed one by one
function greet(age){
  return `hello ${this.name}, ${age}`
}
let object = {name:"mehan"};

// console.log(greet.call(object,123));


// apply
// do exactly what call does
// arguments are passed as an array
function greet1(age,place,test){
    return `hello ${this.name}, ${age}, ${place}`
}

let objject1 = {name:"mehan"};

console.log(greet1.apply(objject1,[123,"test"]));


// bind does not execute immediately, it returns a new function
function greet2(age,place){
    return `hello ${this.name}, ${age}, ${place}`
}

let object2 = {name:"mehan"};

let fn = greet2.bind(object2,123,"test");
console.log(fn());