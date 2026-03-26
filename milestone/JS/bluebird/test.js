// const Promise = require("")
// const start = Date.now();

// const time = () => ((Date.now() - start)/1000).toFixed(1) + "s";

// Promise.map(
//   [1,2,3,4,5], 
//   data => {
//     console.log("start", data, time());

//     return Promise.delay(1000).then(()=> {
//       console.log("end  ", data, time());
//       return data;
//     });
//   },
//   {concurrency:1}
// ).then(data=> console.log("RESULT", data, time()));



const Promise=require("bluebird");

// bluebird promise

// 1)Promise.map()

// Promise.all runs everything at once
// blurbird allows control how manu run in parallel
// Promise.map()

// Promise.map(array,asyncFunction,options)

// let array1=[1,2,3,4,5,6];

// Promise.map(array1,arr=>{
//     if(arr===3){
//         return Promise.reject("Error daa")
//     }
//     return Promise.delay(1000).then(()=>{
//         console.log("Processing: ",arr)
//         return arr*3
//     })
// })
// .then(result=>{
//     console.log(result);
// })


// Promise.map(array1,arr=>{
//     return Promise.delay(1000).then(()=>{
//         console.log("Processing in Promise.map: ",arr)
//         return arr*3
//     })
// },{concurrency:2})
// .then(result=>{
//     console.log(result);
// })
// .catch((err)=>{
//   console.log("error",err)
// })



// 2) Promise.each()

// It is runs in sequence
// returns orginal array
// used to preserve execution order
// execute one by one

let array2=[1,2,3,4,5,6];

// Promise.each(array2,arr=>{
//   return Promise.delay(1000).then(()=>{
//     console.log("Processing in Promise.each: ",arr)
//   })
// })
// .then(()=>{
//     console.log("Each")
// })



// 3) Promise.delay()
//   creates a promise that resolves after given time

// Promise.map(array2,num=>{
//     return Promise.delay(1000).then(()=>{
//         console.log("Processing in Promise.delat",num)
//         return num*2;
//     })
// })
// .then((res)=>{
//     console.log(res);
// })


// 4) Promise.timeout()
//  Rejects a promise if it doesnt complete in given time
//    (current promsie doesnt promise)

// Promise.delay(2000)
// .timeout(2000)
// .then(()=>console.log("success"))
// .catch((err)=> console.log("error:", err.message))

// in Api call

// function fetchUser(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("User succesfully fetched")
//     },1000)
//   })
// }

// fetchUser()
// .timeout(3000)
// .then((ans)=>{
//     console.log(ans)
// })
// .catch(()=>{
//     console.log("server is too slow");
// })


// 5)Promise.props()

//works like promise.all() but for objects only while promise.all is for array
// if error in one property means it will give erorr and it doestnt wait for others

// let obj={
//     user:Promise.resolve("khalid"),
//     age:Promise.reject(25),
//     city:Promise.resolve("chennai")
// }
// Promise.props(obj)
// .then((res)=>{
//     console.log(res);
// })
// .catch((res)=>{
//     console.log(res)
// })

// Promise.props({
//     a:Promise.reject("Error in a"),
//     b:Promise.delay(2000,20),
//     // c:Promise.reject(1500,30)
// })

// .then((res)=>{
//     console.log(res)
// })


// 6)Promise.promisify()
 //convert callbased to promisebased


 //IN JS without bluebird

// function add(a,b,callback){
//   if(typeof a !=="number"){
//     return callback("hello",null)
//   }
//   callback(null,a+b);
// }

// add("khalid",10,(err,result)=>{
//     if(err){
//        console.log("Error",err)
//     }else{
//         console.log(result)
//     }
// })


// function promiseCall(a,b,callback){
//    if(typeof a!=="string"){
//     return callback("Error happened bro")
//    }
//    console.log(${a} is meeting ${b} in hotel at 11am);
// }
// promiseCall("mehan","manoj",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(result);
//     }
// })

//with Bluebird

// function add(a,b,callback){
//     if(typeof a!=="number"){
//         return callback("Invalid input")
//     }else{

//     }
//     callback(null,a+b);
// }
// const addAsync=Promise.promisify(add);

// addAsync(5,10)
//  .then((result)=>{
//     console.log(result)
//  })
//  .catch((err)=>{
//     console.log(err);
// })



//7) Promise.promisifyAll()

//convert all func in object to promise version
//promise.promisfy() converts a single func from callback style
//promise.promisifyAll() converts all functions of an object
//bluebird adds "Async" automatically to avoid overwrting orginal function
//it internally wrap callback to promise

// const math={
//     add:(a,b,callback)=>{
//         callback("error",a+b)
//     },
//     multiply:(a,b,callback)=>{
//         callback(null,a*b)
//     }
// }

// Promise.promisifyAll(math)

// math.addAsync(5,10)
//  .then(result=>console.log("Add:" ,result))
//  .catch((err)=>console.log(err.message));

// math.multiplyAsync(2,3)
//  .then(result=>console.log(result)) 



//8) Promise.some()


//it resolves when count number of promises fulfill successfullly
//it ignores rejects until it become impossible to reach the req count
//promise.any() needs one but in some we can customize and get those things


// let s1=Promise.resolve(15);
// let s2=Promise.reject("error");
// let s3=Promise.resolve(15);
// let s4=Promise.resolve(100);

//if(0)---> unhandled rejection error

// Promise.some([s1,s2,s3,s4],0)
//  .then((result)=>{
//     console.log(result)
//  })
//  .catch((err)=>{
//     console.log(err.message)
//  })


// 9)Promise.try()

// Executes a function and automatically wraps it in a "promise"

//.then() runs only when the Promise resolves
// If you never call resolve(), the Promise stays "pending".then() never runs
// When you resolve() without a value, .then() receives undefined

// function trys(){
//         setTimeout(()=>{
//         console.log("using for try")
//     },1000)
//    return "helloo from tryss"
// }

// Promise.try(trys)
// .then((result)=>{
//     console.log(result)
// })
// .catch((err)=>{
//     console.log(err)
// })


// 10)Promise.method

//takes a function and ensures it is always returns a promise whnerever function returns value or thrown error

//it is same as promise.try() but instead of running the function immendaitly it wraps it thats all but whenervr you call it behaves like a promise returning function


// function add1(a,b){
//     return a+b
// }

// const add1Async=Promise.method(add1)

// add1Async(5,10)
// .then((result)=>{
//     console.log(result);
// })

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




// let obj = {
//     x:123
// }

// console.log(obj.hasOwnProperty("x"));
// console.log("x" in obj);




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

// console.log(parent.property1);
// console.log(grandParent.name);// undefined 

// let arr =[1,2,Promise.reject(3), 4,5];
// Promise.map(arr,data=> {
//     console.log(data);
//     // Promise.delay(1000)
//     // .then(()=> console.log(data))
// }, {concurrency:2}) //// with this concurrency it will run only 2 promises for 1000ms
// .catch(err=> console.log("err"))


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


// function Parent12(name){
//     this.name = name;
// }

// Parent12.prototype.greet = function(){
//     return  `hello, ${this.name}`
// }

// function Child12(name){
//     Parent12.call(this,name);

// }

// Child12.prototype = Object.create(Parent12.prototype);
// Child12.prototype.constructor = Child12;

// let child123 = new Child12("mehan")
// console.log(child123.greet());

// const person = {
//     species:"human",
//     name:"test",
//     speak(){
//         return "I am " + this.name;
//     }
// };

// const user = Object.create(person);

// Object.defineProperties(user,{
//     name:{ value:"Mehan", writable:false, enumerable:true },
//     age:{ value:21, writable:true },
//     birthYear:{
//         get(){ return 2026 - this.age; }
//     }
// });

// console.log(user.name);

// let obj1={
//     _name:"mehan",
//     age:123,
//     get name(){
//         return this._name
//     }
// }

// let obj2 = Object.create(obj1)
// console.log(obj2.name);
// console.log(Object.getOwnPropertyDescriptor(obj2,"_name"));
// console.log(Object.getOwnPropertyDescriptors(obj2));

// function User(){}

// User.prototype.name = "";
// User.prototype.age = 0;

// User.prototype.greet = function(){
//   return `Hi ${this.name}`;
// }

// const u1 = new User();
// u1.name = "A";

// const u2 = new User();
// u2.name = "B";

// console.log(u1)
// console.log(u2)

// function User() {}

// User.prototype.name = "default";
// User.prototype.sayHi = function () {
//     console.log("Hi " + this.name);
// };

// const u1 = new User();
// const u2 = new User();
// u1.prototype.name="mehan";
// // u1.sayHi === u2.sayHi; // true
// console.log(u2.name);

// function User() {}
// User.prototype.hobbies = [];
// User.prototype.name = "default";

// const u1 = new User();
// const u2 = new User();

// u1.hobbies.push("music");
// u1.name = "Mehan";
// console.log(u2.hobbies); // ["music"]  shared (bad)
// console.log(u2.name); // ["music"]  shared (bad)


console.log("\n--- Prototype Chaining ---");

function AnimalPC() {
    this.food = [];
}
AnimalPC.prototype.walk = function(){};

function DogPC(){}
DogPC.prototype = new AnimalPC();

const pc1 = new DogPC();
const pc2 = new DogPC();

pc1.food.push("meat");
console.log("Shared?", pc2.food); // BAD
