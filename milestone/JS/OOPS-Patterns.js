// Factory Pattern
// Instead of creating objects using new or class directly,
// you call a function that builds and returns an object.
class CommonParent{
    export(data){
        throw new Error("method not implemented",data)
    }
}
class PDFExporter extends CommonParent{
    export(data){
        console.log('Exporting PDF:',data)
    }
}
class WordExporter extends CommonParent{
    export(data){
        console.log('Exporting PDF:',data)
    }
}
class ExcelExporter extends CommonParent{
    export(data){
        console.log('Exporting PDF:',data)
    }
}

// without factory method, for example if we are using this export function in 10 different places in our codebase, if a new export type is added then we have to change the code in 10 different places 
// function exportFUnction(type,data){
//     let exporter;

//     if(type=="pdf") exporter = new PDFExporter();
//     else if(type=="word") exporter = new WordExporter();
//     else if(type="excel") exporter = new ExcelExporter();

//     exporter.export();getOwnPropertyDescriptor
// }

// with factory method, with factory method , we only need to add that if statemtnt for updated export method only here, because on that 10 different palces we are just using it like new ExportFactory().create("type")
class ExportFactory{
    create(type){
        if(type=="pdf") return new PDFExporter();
        else if(type=="word") return new WordExporter();
        else if(type=="excel") return new ExcelExporter();
        throw new Error("unknown format");
    }
    
}

const factory = new ExportFactory();
let  word = factory.create("word");
let pdf = factory.create("pdf");
// pdf.export(pdf)
// word.export(word);


// constructor pattern
//without constructor function
let objA = {
    name:"mehan",
    age:123
}
let ObjB={
    name:"mehan",
    age:123
}
let ObjC={
    name:"mehan",
    age:123
}

// now if u want to add a place property, we need to add it in all three objects, that violates DRY principle, 

//with using constructor patterm, we only need to add that in this constructor function only, and use it in all the objects
function Test(name,age){
    this.name = name;
    this.age = age;
 
}
// Test.prototype.greet = function(){
//     console.log("hello",this.name)
// }

let obj1 = new Test("mehan",20);
let obj2 = new Test("test",20);
// obj1.greet();


// Prototype pattern, 
// here this ObjAB dosent not have greet function, when we call it using objAB, it check itself , if not found check its parents prototype , found!! stop searching, and the 
// this object points to the objAB because we called the greet using objAB
let objABC = {
    greet(){
        console.log("hello," , this.name)
    }
}

let objAB = Object.create(objABC);

objAB.name = "mehan";

objAB.greet();

// another example for Prototype pattern
let livingThing = {
    type: "living",
    Identify(){
        console.log("Living thing identified",this.name," and its sound is:", this.sound)
    }
}

let animal = Object.create(livingThing);
animal.sound = "unknown";

let cat = Object.create(animal);
cat.name = "cat";
cat.sound ="meowww";

// cat.Identify();
// here cat dosent have the, identify function, it gets it search it in animal , not found, so it looks at LivingTHing found using this object it takes value from the the cat


//combination patteren, it just the combination of constructor and prototype pattern,
function combinationPattern(name,age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log(`hello ${this.name}`);
    }
}
// let objA1 = new combinationPattern("mehan",20);
// let objB1 = new combinationPattern("test",20);

// here the function greet is lives inside, each object created using the combinationPattern function, for example if we have 10 objects, each one of them contains the greet function, this will causes memory issue

function combinationPattern(name,age){
    this.name = name;
    this.age = age;
}
combinationPattern.prototype.greet  = function(){
    console.log(`hello ${this.name}`);
}

// let objA1 = new combinationPattern("mehan",20);
// let objB1 = new combinationPattern("test",20); // here the greet method lives only inside the constructor function's prototype, so no matter how namy objects u create those objects only points to the prototype, this will save memory 




// dynamic prototype pattern
function DynamicPrototype(name,age){
    this.name = name;
    this.age = age;
    
    if(!DynamicPrototype.prototype.greet){
        DynamicPrototype.prototype.greet = function(){
            console.log(`hello ${this.name}`);
        }
    }
}

let dyn = new DynamicPrototype("mehan",34534534);
dyn.greet(); // here the greet function is called in the run time, by checking if it exist on DynamicPrototype or not

// parasatic constructor pattern
// here we are storing the name and age inside this object, but parasatic prototype means we can create our own custom object 
function ObjFunc(name,age){
    this.name = name;
    this.age = age;

    console.log(this.name,this.age);
}

//with parasatic constructor, here we are not storing the name and age inside this object, we are storing them in our custom function
// using this we can return any type of object an array, function
function Parasatic(name,age){ 
    let obj={};
    obj.name = name;
    obj.age = age;
    obj.greet = function(){
        console.log(obj.name,obj.age);
    }

    return obj;
}
let obj1234 = new Parasatic("mehan",123123);
obj1234.name = "mehan123";
console.log(obj1234.name);
obj1234.greet();


// Durable constructor
/*Durable constructor object data object kulla store panna maata
Function memory (closure) kulla store pannum**/

// while using "this" we can change the values from outside the function, like obj1234.name="test"
// but while using custom object we cannot change the value, because it lives in the lexical scope of the function, it is only accessible inside the function

function DurableBankExample(balance){
    let _balance =  balance;
    return {
        deposit(x){
            _balance += x;
        },
        getBalance(){
            return _balance;
        }
    }

}

let durableObject = new DurableBankExample(10000);
durableObject.deposit(5000);
console.log(durableObject.getBalance());
durableObject._balance = 0;
console.log(durableObject.getBalance()); //the value is not changed because the balance is stored in function's lexical scope

// contructor stealing

// what problem it solves
function Animal(){
    this.animals = [];
}

function Dog() {};

Dog.prototype = new Animal();

let dog1 = new Dog();
let dog2 = new Dog();

dog1.animals.push("test");

console.log(dog2.animals);
// here the the animal is added the dog prototype commmonly, so the animals array inside the Animals will be shared to all the instances of dog

// fix:
function Vehicle(name){
    console.log("name from parent",name);
    this.parts = [];
}

function  Car(name){
    Vehicle.call(this,name);
}

let car1 = new Car("BMW")
let car2 = new Car("honda");
car1.parts.push("benz");
car2.parts.push("sidemirror");

console.log(car1.parts);
console.log(car2.parts); // now both have different arrays, because the 
/**
 explanation visually
        new Car("BMW")
        ↓
        create empty object {}
        this → car1
        ↓
        Vehicle.call(this)
        ↓
        Vehicle writes: car1.parts = []
 
 */

// constructor stealing not, copy the data in prototype, it only store dat ain the object instance, because the purpose of call is to call the parent constructor not prototype

function Person(name){
    this.name = name;
}

Person.prototype.age = 12;
Person.prototype.greet = function(){
    return `hello, ${this.name}`;
}

function MilitaryPerson(name){
    Person.call(this,name);
}

let militaryPerson1 = new MilitaryPerson("mehan");
// console.log(militaryPerson1.greet()); // gives error 
// console.log(militaryPerson1.name); // mehan


// but what if we need both 
// each object needs to have its own data and 
// objects have shared method

function Person1(name,age){
    this.name = name;
    this.age = age;
}

Person1.prototype.greet = function(){
    return `Hello, ${this.name}`;
}

function MilitaryPerson(name,age){
    Person1.call(this,name,age);

}

MilitaryPerson.prototype = Object.create(Person1.prototype);
MilitaryPerson.prototype.constructor = MilitaryPerson;

let militart = new MilitaryPerson("mehan",12345);
// console.log(militart.name);
// console.log(militart.greet()); 
// visual explanation, by chatgpt
/**
 militart  (actual object in memory)
│
├── name : "mehan"
├── age  : 12345
│
└── [[Prototype]] ───────────────► MilitaryPerson.prototype
                                    │
                                    ├── constructor : MilitaryPerson
                                    │
                                    └── [[Prototype]] ───────► Person1.prototype
                                                                │
                                                                ├── greet()   ← FOUND HERE
                                                                │
                                                                └── [[Prototype]] ───► Object.prototype
                                                                                         │
                                                                                         ├── toString()
                                                                                         ├── hasOwnProperty()
                                                                                         └── ...

 */


function parent1(){

}

function child1(){
    this.name = "mehan"
}


child1.prototype = new parent1(); // here a constructor is living inside the prototype object of the child1, so when we resassign it with parent1, we overwrited it with the parent1 function's constructor
// to prevent this we again need to, reassign it

child1.prototype.constructor = child1; // now when u print c1 it shows child1 {name:'mehan'}

let  c1 = new child1();
console.log(c1);




//----------------------------------------------Simply Pattern explanations------------------------------------

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