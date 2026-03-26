// Mutable and Immutable

// Primitive data types cannot be modified so it is immutable
//  here we are just changing the pointer direction from 10 to 20;
let a = 10;
a = 20;
console.log(a);

// By default objects are mutable, we can set it to immutable
let obj = {
    name:"mehan",
    age:20,
    place:"test1"
};

Object.preventExtensions(obj); // this only prevents us from adding new properties to the object

obj.state= "test2"; // this is a silent failure because its not using strict mode , at the end the object will not be added but it not show any error
// console.log(obj);

// this will throw an error because internally it uses strict method
// Object.defineProperty(obj, "state",{
//     value:"test3"
// });

// console.log(obj);


// Object.seal(obj) // this is not allow to add or delete existing properties, but u can modify the value of existing properties

let objSeal = Object.seal(obj);
objSeal.state = "test4"; // it allows this
// but not adding or deleteing the properties

objSeal.country = "India";
delete objSeal.place; // it doesnt show any error 

console.log(objSeal);


// Object.freeze(obj) this is not allow us to do anything, we cannot add or delete or modify the properties

let objFreeze = Object.freeze(obj);
objFreeze.state = "test4"; // it doesnt show any error  and dont do any changes in the object
delete objFreeze.place; // it doesnt show any error and dont do any changes in the object
console.log(objFreeze);

// Object.defineProperty(objFreeze,"state",{
//     value:"test5"
// }); // this will give error, because it uses strict mode



// Dynamic Properties
let dynamicObj = {} // we can dynamically add values to this object
dynamicObj.name = "mehan";
dynamicObj.age =  20;


let sportKey = " sport"
let countryKey = "country" // using the value of a variable as a key and here the property name is decide at run-time
dynamicObj[countryKey] = "india"; 
dynamicObj[sportKey] = "football"

//here in the variable declaation there is a space in front of s, so while accessing the values also we need to take that space in count
console.log(dynamicObj[" sport"]);



// assiging keys using loop
let objKeysWithLoop = {};
for(let i=0;i<5;i++){
    objKeysWithLoop[i] = "test" + i;
}
console.log(objKeysWithLoop);


// Copying values

//copy by value
let num1 =10;
let num2 = a;
num1 = 99;
console.log(num2);

//copy  by reference
let arr = [1,2,3,4]
let arr2 = [...arr];

arr[0] = 99;

console.log(arr);


// Argument passing

//passing argument by value
function parameterByValue(arg){
    arg= 10;
    console.log(arg);
}
let  a1 = 99;
parameterByValue(a1);
console.log(a1); //here the value of a1 is not changed , because the value is passed by value

// reference argument by value
function parameterByReference(arg){
    arg.name ="test";
    console.log(arg.name);

    arg.hobbies.push("coding");
    console.log(arg.hobbies);

    arg = {
        name:"test2",
        hobbies:["running1","gaming1","coding1"]
    };

    console.log(arg);

}

let obj_1 = {name:"mehan", hobbies:["running","gaming"]};
parameterByReference(obj_1);
console.log(obj_1);


function parameterByReferenceForArray(arr){
    arr[2] = 100;
}
let arr1 = [1,2,3,4];
parameterByReferenceForArray(arr1);
console.log(arr1);


//    Determining Type

//typeof , returns the type of the value in type string
console.log(typeof 10);
console.log(typeof "mehan")
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function test(){});

/**
 * In JavaScript specification there is an internal concept:

Callable Object

Any object that can be executed with () is marked as callable.

Functions are:

Objects + callable behavior

So it gives functions for Functions
 */

console.log("------------------------------------")

// instanceOf is used to check the value is child of an object or a prototype 
console.log(10 instanceof Number);
console.log(new String() instanceof String);
console.log(null instanceof Object);
console.log(undefined instanceof Object);
console.log(true instanceof Boolean);
console.log([] instanceof Array);
console.log({} instanceof Object);
console.log(function test(){} instanceof Function);
console.log(Date instanceof Object);
console.log("----------------------------------------");

// Object.prototype is for particularly check the the object of the value, here call is used for return which type of object it is
console.log(Object.prototype.toString.call(null))       
console.log(Object.prototype.toString.call("123"))       
console.log(Object.prototype.toString.call(123))       
console.log(Object.prototype.toString.call([]) )        
console.log(Object.prototype.toString.call({}))         
console.log(Object.prototype.toString.call(new Date())) 
console.log(Object.prototype.toString.call(/abc/))


// function accessingWindowObject(){
//     console.log(this)
// }
//  accessingWindowObject(); // if we used use strict the this will be undefined , because if this has global object (window), if u use this.name = "mehan", it is = to window.name = "mehan" this is global object pollution



 // Array.prototype is a custom prototype particularly for array, object is a common prototype that is common to all, so if a array or set or object dosent have
 // a  prototype function then it will go and check  object prototype , if object prototype dosent have the function it will return undefined
 Object.prototype.generalHello = ()=>{
    console.log("Hello from object prototype")
 }

 Array.prototype.hello = ()=>{
    console.log("Hello from array prototype")
 }

 let arr_1 = [1,2,3,4];
 arr_1.hello();
 arr_1.generalHello() // it only checks whether arr_1 is undefined ot nul if yes returns undefined
 // if u need to check function use this



 // First global execution context created, 
 // if there is aa function it will create function execution context
 let var1 = 10;
 function context(){
    console.log(var1);
 } 

 context(); // here the function first check locally for var1 it not exist so it will get the var1 from the global execution context,(this is called scopechain)  


 // Scopechain agumentation
 // it simply means if a variable is not found on local it will check the parent scope by default, we are inserting a new scope in between 
 // parent and  child scope, that is called scopechain agumentation
// with => local => global
 // using with
 let var12 = 10;
//  function context1(){ // using with it first look var1 at with scope  -> local scope -> global scope
//     with({var1:20}){
//         console.log(var1);
//     }
//  }
//  context1();

 // using try catch
 let errorMessage=  "global error";
 function context2(){
    try {
        throw "Inner Message"
    } catch (errorMessage) {
        console.log("Error message from inner message",errorMessage);
    }
    console.log("Error message from global error",errorMessage);
 }
 context2();
 

 // using eval
 function context3(){
    let var3 = 10;
    eval("var3 = 11");
    console.log(var3);
 }

 context3();

