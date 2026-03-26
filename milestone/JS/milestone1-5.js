//function declaration

//named function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
console.log(add(3, 5));

//arbitary data: a value that has no fixed rules to define, it a random information

console.log(Number(" 1 2 ")); // NaN
console.log(parseInt(" 1 2 ")); // 1 , once it finds a valid number, after that if it finds a invalid number ot stops and returns

//type of with value and expression
console.log(typeof 1);
console.log(typeof (1 + 1));
console.log(typeof 1+1); /// number1

//Infinity
console.log(1 / 0);
console.log(-1 / 0);
console.log(Infinity);
console.log(-Infinity);

//NaN
console.log("mehan" / 2);

console.log(NaN * 1);
console.log(NaN ** 0);
console.log("as"**0); // in js anything power 0 is 1

// because js engine saw the / numeric operator and try to convert the string to number,
// if the string is number the arithmetic operation will happen, other wise it will return NaN
console.log("6" / "3");

//numbric conversioon rules
console.log(Number(undefined)); //Nan
console.log(Number(false)); // 0
console.log(Number(true)); // 1
console.log(Number(null)); //0
console.log(Number("    0")); // 0

//Boolean conversion rules
console.log(Boolean(0)); //f//
console.log(Boolean(1)); //t
console.log(Boolean(" ")); //t
console.log(Boolean("0")); //t
console.log(Boolean("")); //f
console.log(Boolean(undefined)); //f
console.log(Boolean(null)); //f
console.log(Boolean(NaN)); //f

//shortcut to number conversion
console.log(+"34");
console.log(-"3434");
console.log(+"4" + +"5"); //9

//chainign operator
let a = (b = c = 2 + 2);
console.log(a, b, c);

//bitwise operator
console.log(2 & 3);
console.log(5 | 4);
console.log(6 ^ 4);
console.log(~5);
console.log(3 << 8);
console.log(3 >> 8);

let a1 = (1 + 2, 3, 4, 5 + 6); //11
console.log(a1);

//type conversions
console.log("" + 1 + 0);
console.log("" - 1 + 0);
console.log(true + false);
console.log(6 / "3");
console.log("2" * "3");
console.log(4 + 5 + "px");
console.log(null + 1);
console.log(undefined + 1);
console.log("\t \n " - 2);

// function changing the global varaible
function test() {
  outer = "tesr2";
}
let outer = "test";
test();
console.log("outer after function call", outer);

// function has its own local variable so it will not change the global variable
let name = "john";
function test2() {
  let name = "test";
  console.log(name);
}
console.log(name);

// passing function arguments will create a  copy of the variable passing
function test3(name) {
  name = "testing";
  console.log(name);
}

let name1 = "johnny";
test3(name1);
console.log(name1);

//default parameter
function defaultParameter(name, age = 20) {
  console.log(name, age);
}

defaultParameter("mehan ", undefined);
defaultParameter("mehan", 31);

//default parameter with a function call
function defaultFunction() {
  return 20;
}

function defaultFunction_functionAsParameter(name, age = defaultFunction()) {
  console.log(name, age);
}
defaultFunction_functionAsParameter("mehan", undefined);
defaultFunction_functionAsParameter("mehan", 25);

// we can also manually handel the default parameter
function defaultFunction2(name, age) {
  if (age == undefined) age = 21;
  console.log(name, age);
}

defaultFunction2("mehan", undefined);
defaultFunction2("mehan", 25);

//function expresssion
let func = function () {
  console.log("this is function expression");
};

func();

console.log(func);

let copyFunc = func;
copyFunc();

//callback
function callback(flag, yes, no) {
  return flag ? yes() : no();
}

function yes() {
  console.log("yes");
}
function no() {
  console.log("no");
}
callback(true, yes, no);

// passing anonymous function in callback, with this method the yes and no are only accissible inside the callbackAnomousParameters
function callbackAnonymousParameters(flag, yes, no) {
  return flag ? yes() : no();
}

callbackAnonymousParameters(
  true,

  function () {
    console.log("yes");
  },

  function () {
    console.log("no");
  },
);

//primitive and non-primitive
let a2 = 10;
let b2 = a2;

b2 = 20;

console.log(a2); //10 because data is passed by value

//conditional operators
let age = 18;

let message =
  age < 10 ? "Child" : age < 18 ? "teen" : age >= 18 ? "adult" : "Unusual age";
console.log(message);

//logical operators
console.log("logical operators");
console.log(5 && 0);
console.log(0 && 10);
console.log(null && 5);
console.log(1 && "mehan");

//nullish coalescing operator,  execute from left to right, if the value is null or undefined it will check next value , if all values are null and undefined
// it will return the last value
let null1 = null;
console.log(null1 ?? "mehan");
let val1 = null;
let val2 = null;
let val3 = "mehan1";
console.log(val1 ?? val2 ?? val3);

let num1 = 10;
console.log(++num1 + num1-- + (num1 + 2) + ++num1);

// arrays
let arr = [];
let arr1 = new Array();
let arr_3 = Array.from([1,2,3,4]);
let arr1234 = Array.from([1,2,3], x => x*2) // [2,4,6]
let arr_4  = new Array(4).fill(0);  // new Array can can single argument as len as well as muultiple argument as elements, it using rest operator internally to
// handel the  multiple arguments
let arr_6 = new Array(1,2,3,5)
let arr_5 = Array.from({length:4})

let arr2 = [1, 2, 3, 4];
let arr3 = new Array(1, 2, 3, 4);
arr3[4] = 4;
delete arr3[5];
let arrWithDifferentType = [
  1,
  "mehan",
  true,
  { name: "mehan" },
  function () {
    console.log("function from array");
  },
];
console.log(arr3[0]);
console.log(arr3);
console.log(arrWithDifferentType[arrWithDifferentType.length - 1]());
arr2.shift();
arr2.unshift(5);
arr2.push(6);
arr.pop(3);
console.log(arr2);

let arrRef1 = [1, 2, 3];
let arrRef2 = arrRef1;
arrRef1.push(4);
console.log(arrRef2);

//rest operator
let arr5 = [1, 2, 3, 4, 5, 6];
let [ele1, ele2, ...ele3] = arr5;

//spread operator
let arr6 = [...arr5, ...ele3];
console.log(arr6);

//splice method make changes in the main array, and return the array it deletes ,if it insert something it will empty array
let arr7 = [1, 2, 3, 4, 5];
// arr7.splice(1,2); // removes 2 elements from index 1 
//slice method uses shallow copy , it copies the redefence of original array elements
console.log(arr7);
arr7.splice(2, 0, "mehan");
console.log(arr7);
arr7.slice(2, 4);

let arr8 = [1, 2, 3, 4, 5, 6, 7];
let arr9 = [1, 2];
let arr10 = arr8.concat(arr9);
console.log(arr10);

let forArr = [1, 2, 3, 4, 5, 6];
forArr.forEach((item, index, arr) => {
  console.log(item, index, arr);
}); // by default returns undefined

console.log(forArr.indexOf(2, 3)); //if element not found return -1, second arguent is from that index it starts looking for that element
console.log(forArr.includes(2, 3)); //if element not found return false

let str1 = "hello hello hello";
let arr20 = str1.split(" ");
console.log(arr20);
let arr21 = arr20.join(",");

let arr11 = [1, 2, 3, 4, 5, 6];

arr11 = arr11.map((ele, index) => {
  return ele * 2;
});

arr11 = arr11.filter((ele, index) => ele % 2 == 0);

let sum = arr11.reduce((acc, ele) => acc + ele, 0);

console.log(arr11);
console.log(sum);

arr.findIndex((ele) => ele == 4);
arr.findLastIndex((ele) => ele == 4);

console.log(console.log("hi"));
console.log(!!undefined);
console.log(!!null);

// window.name = "mehan123"

let obj123 = {
  name: "mehan",
  age: 20,
  place: "test",
  exp: function () {
    const test = () => {
      return this.name;
    };
    return test();
  },
  arr: () => {
    return this.name;
  },
};

console.log(obj123.exp());
// console.log(obj123.arr())

//objects
let obj = {
  name: "mehan",
  age: 30,
  "place from": "test",
};
let key = "place from";
console.log(obj.key);

let arr14 = [1, 2, 3, 4];
arr14.splice(0, 1, 5);
console.log(arr14);

let arr16 = [1, 2, 3, 4, 5];
let obj10 = {
  name: "mehan",
  age: 18,
  place: "test",
};
for (let i in obj10) {
  console.log(i);
}

Object.entries(obj10).forEach(([key, val]) => console.log(key, val));

let obj16 = {
  name: "mehan",
  name1: this.name, //undefined because function declatation is missing
};

console.log(obj16);

//shallow copy
let obj17 = {
  name: "mehan",
  test: {
    adress: "test",
    palce: "test2",
  },
};

let objTest = Object.assign({}, obj17); // also wriiten as
objTest.name = "mehan1";
objTest.test.adress = "test1";
console.log(obj17);

//deep copy

//JSON Method
let deepcopyObject = JSON.parse(JSON.stringify(obj17));
deepcopyObject.name = "mehan1";
deepcopyObject.test.address = "chennai";

console.log(obj17);

// Structured Clone method
let obj_1 = {
  name:"mehan",
  data:{
    age:20,
    place: "test"
  }
}

let obj_2 = structuredClone(obj_1);
obj_2.name="123";
console.log(obj_1)
console.log(obj_2)


let onj18 = {
  name: "mehan",
};
console.log("name" in onj18);

//function overloading
function add(a, b, c) {
  if (c != undefined) {
    return a + b + c;
  }
  return a + b;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

function add(...arg) {
  let sum = arg.reduce((acc, ele) => acc + ele, 0);
  return sum;
}

console.log(add(1, 2));
console.log(add(1, 2, 3, 4));

console.log(+"3.4");

console.log(JSON.stringify(1));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3, 4]));

console.log(Array.from("Hello"));
let set = new Set([1, 2, 3, 4]);
console.log(Array.from(set));
Array.from([1, 2, 3, 4], (e) => {
  console.log(e * 2);
});

console.log(typeof NaN);


//event loop

// console.log("a");

// setTimeout(()=>{
//   console.log("b");

//   Promise.resolve().then(()=> console.log("c"));

//   queueMicrotask(()=>console.log('d'))

// },0)


// Promise.resolve().then(()=>{
//   console.log("e");
//   setTimeout(()=>console.log("f"),0)
// });

// (async()=>{
//   console.log("g");
//   await null;
//   console.log("h");

//   Promise.resolve().then(()=>{
//     console.log("i");
//   })

// })()

// queueMicrotask(()=>{
//   console.log("j");
// })

// console.log("k");

//switch case
let x = 1;
switch(x){
  case 1:
    console.log("x matched");
    break;

  default:
    console.log("x not matched");

}



let x1 = 10;
switch(x1){ 
  case 10: // here case 10 has no body and break , so it starts executing cases below it  once the match found until the next break keyword
  case 2:
    console.log(" this is case 2");
    // break;
  default:
    console.log("x not matched");
}


//process.nextTick, this function executes the  callback right after execution of sync code instead of microtask
setTimeout(()=> console.log("timeout"),0);

Promise.resolve().then(()=> console.log("promise"))

process.nextTick(()=>console.log("next tick"));

console.log("sync code");




// async of loop

// const delay = (time)=> new Promise(resolve=> setTimeout(resolve,time));

// async function* generatorFunc(){
   
//   await delay(1000);
//   yield 1;
//   // console.log("1");
  
  
//   await delay(5000);
//   yield 2;
//   // console.log("2");
  
//   await delay(7000);
//   yield 3;
//   // console.log("3");
  
// };
// (async()=>{
//   for await (let i of generatorFunc()){
//     console.log(i);
//     if(i==2) break;
//   }

// })()



let arr123 = [1,2,3,4];
let arr456  = arr123.slice(0,1);
console.log(arr456);

