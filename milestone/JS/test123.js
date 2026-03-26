// // function func(){
// //     console.log(this);
// //     return 10;
// // }


// // const arrow = ()=>{
// //     console.log(this)
// // }

// // // func();
// // // arrow()

// // let obj = {
// //     name:"tes",
// //     val1:123,
// //     val2:34
// // }
// // for(let i in obj){
// //     console.log(`keys:${i} , values:${obj[i]}`)
// // }
// //                 [name,val1,val2]
// // for(let i of Object.keys(obj)){
// //     console.log("keys",i, "valuess:", obj[i]);
// // }

// // for(let i of Object.values(obj)){
// //     console.log("values",i);
// // }

// // for(let [k,v] of Object.entries(obj)){
// //     console.log(`keys:${k} , values:${v}`)
// // }

// // Object.entries(obj).forEach(([k,v])=>{
// //     console.log(k,v)
// // })

// // Object.entries(obj).map(([k,v])=> console.log(k,v));
// // Object.entries(obj).filter(([k,v])=> console.log(k,v));
// // Object.entries(obj).reduce((_,[k,v])=> console.log(k,v));
// // Object.entries(obj).find(([k,v])=> console.log(k,v));


// // Object.preventExtensions(obj); // not allow to add properties
// // obj.palce="chennai";
// // console.log("preventExtensions:",obj);


// // Object.seal(obj); // not allow to add and delte , bu can mofidy existing property
// // obj.palce  ='chennai';
// // delete obj.name;
// // obj.name = "test1234";

// // console.log("seal",obj);


// // Object.freeze(obj); // completely freeze object
// // obj.palce  ='chennai';
// // delete obj.name;
// // obj.name = "0";

// // console.log("freeze",obj)


// // Object.defineProperty(obj,test,"mehan");
// // console.log("define",obj);

// let obj = {
//     a:10,
//     b:10,
//     c: "test",
//     d:{
//         e:10,
//         f:{
//             h:10,
//             h1:{
//                 h2:{
//                     h3:10
//                 }
//             }
//         }
//     }
// }
// let sum = 0;
// function ite(val){
//     // console.log(val)
//     Object.entries(val).forEach(([k,v])=>{
//         if(typeof v =='object'){
//             ite(v)
//         }
//         else if(typeof v=='number'){
//             sum+=v
//         }
//     })
// }
// // console.log(Object.entries(obj));
// Object.entries(obj).forEach(([_,v])=>{
//     if(typeof v == 'object'){
//         ite(v)
//     }
//     else if(typeof v=='number'){
//         sum+=v
//     }
// })
// // console.log(sum)

// // callback
// function getIngridents(cb){
//     setTimeout(()=>{
//         console.log("preparing ingridents");
//         cb(["ingrident1","ingrident2","ingrident3"])
//     },1000);
// }

// function cookPizza(ingridents,cb){
//     setTimeout(()=>{
//         console.log("preparing pizza with",ingridents);
//         cb("pizza");
//     },2000);
// }

// function packPizza(pizza,cb){
//     setTimeout(()=>{
//         console.log("Paxking pizza",pizza);
//         cb("packedpizza");
//     },3000)
// }

// function delivery(packedpizza){
//     setTimeout(()=>console.log("delivery pizza"),4000);
//     console.log(packedpizza)
// }

// getIngridents(function(args){
//     cookPizza(args,function(pizza){
//         packPizza(pizza,function(packpizza){
//             delivery(packpizza)
//         })
//     })
// })




// // promise
// function getIngridents(){
//      return new Promise((r)=>{

//          setTimeout(()=>{
//             console.log("preparing ingridents");
//             r(["ingrident1","ingrident2","ingrident3"])
//         },1000);
//      })
// }

// function cookPizza(ingridents){

//     return new Promise((r)=>{
//         setTimeout(()=>{
//             console.log("preparing pizza with",ingridents);
//             r("pizza");
//         },2000);
//     })
// }

// function packPizza(pizza){
//     return new Promise((r)=>{
//         setTimeout(()=>{
//             console.log("Paxking pizza",pizza);
//             r("packedpizza");
//         },3000)
//     })
// }

// function delivery(packedpizza){
//     return new Promise((r)=>{
//         setTimeout(()=>console.log("delivery pizza"),4000);
//         console.log(packedpizza)
//     })
// }

// getIngridents()
// .then(data=> cookPizza(data))
// .then(data=> packPizza(data))
// .then(data=> delivery(data))
// .catch(e=> console.log(e));


// // async await
// async function pizzamanager(){
//     let ingridents = await getIngridents();
//     let cooking = await cookPizza(ingridents);
//     let pack = await packPizza(cooking);
//     let deli = await delivery(pack);

//     return deli;
// }

// pizzamanager();


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