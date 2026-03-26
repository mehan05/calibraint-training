
// function inBetweenCatchExample(){
//     return new Promise((resolve,reject)=>{
//         // resolve(1)
//         reject(2)
// })
// }


// inBetweenCatchExample()
// .then(data=> {
//     console.log("data from promise1",data)
//     return  Promise.resolve(data)
// })
// .catch(error=> {
//     console.log("error from promise1")
//     return error
// })
// .then(data=>  {
//     console.log("data from promise2");
//     return Promise.resolve(data)
// })
// .catch(error=> console.log("error from promise2", error))








// // .catch(()=>{
// //     console.log("finally executed")
// //     throw "error from finally"
// // })





// // polyfill 
// // some old broswers not support the promise.allSettle method, so we are writing our own allSettle method

// // example for example by defaut we dont have checkElementPresence method
// let arr_1 = [1,2,4]
// // console.log(arr_1.checkElementPresence(1)); // array prototype does not have this 

// // now we are writing our own includes method
// if(!Array.prototype.checkElementPresence){
//   Array.prototype.checkElementPresence  = function(ele){
//         for(let i=0;this.length;i++){
//           if(this[i]==ele){
//               return {presence:true,index:i}
//           }
//         }
//   }
// }
// console.log(arr_1.checkElementPresence(2));



// let a =10;
// let b = a;
// a = 100;
// console.log(b);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function test(){});


//  Object.prototype.generalHello = ()=>{
//     console.log("Hello from object prototype")
//  }

//  Array.prototype.hello = ()=>{
//     console.log("Hello from array prototype")
//  }

//  let arr_1 = [1,2,3,4];
//  arr_1.hello();
//  arr_1.generalHello() // it only checks whether arr_1 is undefined ot nul if yes returns undefined
//  // if u need to check function use this\



// let urls_2 = [
//    new Promise((re,rj)=> setTimeout(()=> {re("timeout1"); console.log("executed 1 backend");
//    },5000)),
//    new Promise((re,rj)=> setTimeout(()=> rj("timeout2"),1000)),
//    new Promise((re,rj)=> setTimeout(()=>{ re("timeout3"); console.log("executed 3 backend");},4000)),
// ]

// Promise.race(urls_2)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))


// let  obj = {}
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));


// let parent = {
//     x:10
// }

// let child = Object.create(parent);
// child.x = 123;
// delete child.x;
// console.log(child.x, parent.x) // 123,10


// function Person1(name,age){
//     this.name = name;
//     this.age = age;
// }

// Person1.prototype.greet = function(){
//     return `Hello, ${this.name}`;
// }

// function MilitaryPerson(name,age){
//     Person1.call(this,name,age);

// }

// MilitaryPerson.prototype = Object.create(Person1.prototype);
// MilitaryPerson.prototype.constructor = MilitaryPerson;

// let militart = new MilitaryPerson("mehan",12345);
// console.log(militart.name);
// console.log(militart.greet());


// console.log(Number("    0")); // 0
// console.log(+"34");
// console.log(-"3434");
// console.log("12"+"4")


// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log("2" * "3");


// console.log(4 + 5 + "px");
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("\t \n " - 2);


// let test = function(){
//     console.log("hi");
// }

// test()

// let num1 = 10;
// console.log(++num1 + num1-- + (num1 + 2) + ++num1);

// let arr = new Array(1,2,3,4,5);
// delete arr[0];

// console.log(arr.includes(2,3));


// let obj123 = {
//   name: "mehan",
//   age: 20,
//   place: "test",
//   exp: function () {
//     const test = () => {
//       return this.name;
//     };
//     return test();
//   },
//   arr: () => {
//     return this.name;
//   },
// };

// console.log(obj123.exp());
// console.log(obj123.arr())


// let obj17 = {
//   name: "mehan",
//   test: {
//     adress: "test",
//     palce: "test2",
//   },
// };

// let objTest = Object.assign({}, obj17); // also wriiten as
// objTest.name = "mehan1";
// objTest.test.adress = "test1";
// console.log(obj17);


// console.log(+"3.4");


// console.log(JSON.stringify(1));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify([1, 2, 3, 4]));

// console.log(Array.from("Hello"));
// let nas = Array.from([1, 2, 3, 4], (e) => {
// e * 2;
// });

// console.log(typeof NaN);




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

// // a
// // g
// // k
// // e
// // h
// // j
// // i
// // b
// // c
// // d
// // f



// function parameterByReference(arg){
//     arg.name ="test";
//     console.log(arg.name);

//     arg.hobbies.push("coding");
//     console.log(arg.hobbies);

//     arg = {
//         name:"test2",
//         hobbies:["running1","gaming1","coding1"]
//     };

//     console.log(arg);

// }

// let obj_1 = {name:"mehan", hobbies:["running","gaming"]};
// parameterByReference(obj_1);
// console.log(obj_1);


// console.log(typeof 10);
// console.log(typeof "mehan")
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof function test(){});

// console.log(Object.prototype.toString.call([]) )        


// console.log(new Date());


// let p = new Promise((r,re)=>{
//     return r("test")
// })

// let p1  = Promise.resolve(5);


// console.log(p,p1);


// let date12 = new Date();
// let date13 = new Date();
// let date4 = new Date();
// console.log(date4.toString()); 
// console.log(date4.toDateString());
// console.log(date4.toTimeString());
// console.log("t",(date4.toLocaleString()));
// console.log(date4.toISOString()); // both ISO and UTC string return UTC time, but UTCString returns in human redable format, ISO is machine readable
// console.log(date4.toUTCString()); 
// console.log(date12==date13);

// console.log(new Date().getDate());
// console.log(new Date().toDateString())
// console.log(new Date().getTime()==Date.now())

//  console.log(new Date("2026-02-16").getTime()/600000)


// let objABC = {
//     greet(){
//         console.log("hello," , this.name)
//     }
// }

// let objAB = Object.create(objABC);

// objAB.name = "mehan";

// objAB.greet();

// let livingThing = {
//     type: "living",
//     Identify(){
//         console.log("Living thing identified",this.name," and its sound is:", this.sound)
//     }
// }

// let animal = Object.create(livingThing);
// animal.sound = "unknown";

// let cat = Object.create(animal);
// cat.name = "cat";
// cat.sound ="meowww";

// cat.Identify();

// function pow(b,e){
//     if(e==0) return 1;
//     return b* pow(b,e-1)
// }

// console.log(pow(2,3));



// let strs = "mehan"
// function rev(str,len){
//     let c =  len
//     if(len<0) return ;
//     rev(str,c-1);
//     console.log(str[len]);
// }
// rev(strs,strs.length);

let date = new Date();
let date3 = new Date();
let date4 = new Date();
console.log(date4.toString()); 
console.log(date4.toDateString());
console.log(date4.toTimeString());
console.log("t",(date.toLocaleString()));
console.log("with time zone", date4.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}));

console.log(date4.toISOString()); // both ISO and UTC string return UTC time, but UTCString returns in human redable format, ISO is machine readable
console.log(date4.toUTCString()); 
console.log(`${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}`);

console.log(Date.now()); // returns the  current time in milliseconds
//this is used for db operations , loginTIme, session time



console.log(new Date().getDate());
console.log(new Date().toDateString())



let dateDifference = Date.now() - new Date("2026-02-10").getTime();
console.log((dateDifference/1000/60/60/24));

const a1 = new Date("2026-02-16T15:30:00+05:30");
console.log(a1.toISOString());