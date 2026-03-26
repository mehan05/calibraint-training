let obj = {
  name: "mehan",
};

// every property in a object contains, some flags to change their characteristics
/* 
1) writable => true or false
2) enumerable => true or false
3) configurable => true or false => Can you delete it or change its settings (writable, enumerable, getter/setter)?

if bith writable and configurable are false, the object is in full lock, we cannot change anything
*/

Object.defineProperty(obj, "name", { 
  writable: true,
  enumerable: true,
  configurable: false,
});

obj.name = "test";
delete obj.name; // if configurable is false it will ignore thie command
console.log(obj);

Object.defineProperties(obj,"name",{value:"mehan"}); // for this by default all the attributes of a property will be false by default if we created using definePropreties


// Accessor properties in object, we can easily access and modify the value, without using get and set, but the purpose of these is to check some conditions before accessing or modifying data,

let obj12 = {
  _name: "mehan",
  place: "chennai",
  get name() {
    console.log(this._name);
  },
  set name(value) {
    this._name = value;
  },
};

console.log(obj12.name); // this will automatically trigger the get method
obj12.name = "test"; // this will automatically triggers the set method

// defining attributes for properties, by default all the properties aare true, but when u defineProperties, all the properties will become false
let obj123 = {};
Object.defineProperties(obj123, {
  name: {
    value: "mehan",
    writable: true,
  },
  age: {
    value: 123213,
    writable: false,
  },
});

obj123.age = 0;
console.log(obj123);

//Object creation
// there are several ways to do object creation

// normal method nothing different
let objA12 = {name:"meehan"}


let objA13 = new Object({name:"mehan"}); // there is a different between these two creation method, the first method just creates a object -> assign properties and done,
//but the second method
/**
 *  1) create empty object
 *  2) set protptype to Object.prototype, but in Object.create we can pass the prototype
 *  3) run object constructor (function with this keyword)
 *  4) return the object
 *  5) assign properties
 */


// constructor function object creation
function TestConstructorFunction(name){
    this.name = name
}
let objA14 = new TestConstructorFunction("mehan");


// to see the attribures of the object property we can use getOwnPropertyDescriptor, here if u use get in object it will automatically include the set as well, if any one of these not used in function it shoes as undefined
let obj321 = {
  name: "mehan",
  age: 124412,
  get name(){
    return this.name
  }
};
console.log(Object.getOwnPropertyDescriptor(obj321, "name"));

// diff between hasOwnProperty and in keyword

let  grandParent={
    property1:"val1"
}

let parent= Object.create(grandParent);
parent.property2 = "val2";


let child = Object.create(parent);
child.property3 = "val3";

console.log(child.hasOwnProperty("property1")); // this checks if the child has its own property1 property, if not it will return false;
console.log("property1" in child); // it checks the entire prototype chain, if the property present somewhere in the chain, it returns true