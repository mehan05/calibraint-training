const Promise = require("bluebird");

// // normal then method
// Promise.resolve(5)
// .then(
//     data=> console.log(data),
//     err=> console.log(err)
// )

// Promise.reject(10)
// .then(
//     data=>console.log(date),
//     err=> console.log(err)
// )


// // spread method=> it automatically spreads the array elements into arguments
// Promise.all([
//     new Promise.resolve(15),
//     new Promise.resolve(101)
// ])
// .spread((a,b)=>{
//     console.log("a:",a);
//     console.log("b:",b)
// })


// //.catch
// Promise.reject(6)
// .catch(err=> console.log(err))

// //filters error  using catch, for example we can use it while if network error? retry if validation error ? return error
// function test(data){
//     if( typeof data != "String") throw new TypeError("not a string");
//     return JSON.parse(data)
// };
// Promise.resolve(5)
// .then(data=> test(data))
// .catch(TypeError,(err)=> console.log("error because of typeerror", err.message))
// .catch(err=> console.log("Normal error",err))


// // finally => it run either resolve or reject, and promise chains execute in the oreder we put then , first example finally runs first, second example finally runs after
// Promise.resolve(61)
// .finally(()=>console.log("clean up from resolve"))
// .then(data=> console.log(data))

// Promise.reject(62)
// .catch(err=> console.log(err))
// .finally(()=>console.log("cleaning up for catch"))


// console.log("-----------------------------------------")

// // map function in promise, it runs concurently, runs the promises from array parallel, it like promise.all but if there is a reject in array, it will ignore the results of the other promises, but they will still run but theri results will be ignored

// let arr =[1,2,Promise.reject(3), 4,5];
// Promise.map(arr,data=> {
//     Promise.delay(1000)
//     .then(()=> console.log(data))
// }, {concurrency:2}) //// with this concurrency it will run only 2 promises for 1000ms
// .catch(err=> console.log("err"))


// // here map will execute the start for 123 first and then wait  for 5000ms and then end
// Promise.map([1,2,3], async (data)=> {
//     console.log("start",data);
//     await Promise.delay(5000)
//     console.log("end",data)
// });

//inside it actually works like 
// console.log("start 1")
// await delay
// (pause here)


// // each => here each will  execute the start 1 waits 1000ms and then 2 waits 1000ms and then 3 waits 1000ms , because it executed secuntialy
// it prevents execution order,
// returns the original array
// Promise.each([1,2,3], async (data)=>{
//     console.log("start",data)
//     await Promise.delay(1000)
//     console.log("end",data)
// })

// the props works exactly like promise.all, but it returns an object, props wait for all object to reslove if any one is rejected all the things are rejected.
// Promise.props({
//     name:gatName(),
//     place: getPlace(),
//     skills:skills()
// })
// .then(data=> {
//     console.log("name:",data.name);
//     console.log("place:",data.place);
//     console.log("Skills:",data.skills);
// });

// async function gatName(){
//   await   Promise.delay(2000)
//     return "Mehan"
// } 

// async function getPlace(){
//     await Promise.delay(2000);
//     return "Chennai"
// }

// async function skills(){
//     await Promise.delay(3000);
//     return ["js","js1"]
// }

// // another example for props
// let obj={
//     status1: Promise.resolve(10),
//     status2:(async function(){
//         await Promise.delay(5000)
//             return Promise.resolve(5)
//     })(),
//     status3: Promise.resolve(20),
//     status4: Promise.resolve(30)
// };

// Promise.props(obj)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))

// Promise.try
// the problem Promis.try solves
// function func(id){
//     if(!id) throw new Error("Error: Invalid Id");
//     return Promise.resolve(id);
// }

// func(12)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))

// here before the resolve happens we throw a new error so the .catch in promise chain not working

// // another example for try
// function trys(arg){
//         setTimeout(()=>{
//             console.log("timeout")
//         },2000)
//         if(arg!=null ||  arg!=undefined)
//         return "hello from trys";
//         else throw "error from trys"
        

// }

// Promise.try(()=>trys(12))
// .then(data=> console.log(data))
// .catch(err=>console.log(err))
// // here if the arg is not null or undefined it will retrn a string , but try method automatically make it  apromise.resolve, if throw executes it automatically makes it a promise.reject

// Promise.try(()=>func(null))
// .then(data=> console.log(data))
// .catch(err=> console.log("err"))
// here using promise.try will runs a function that returns a promise


// // Promise.some, it gets count it just need to resolve the count number of promises, if not it gives error, remaining promises still execute, but Promise.some stops caring once it has enough successes.
// Promise.some([new Promise.resolve(1),new Promise.reject(2),new Promise.reject(3),new Promise.resolve(4)],2)
// .then(data=> console.log("data",data))
// .catch(err=> console.log("err",err))


// //Promise.any, it resolves the first promise that resolves, only fails if all the promises are rejected
// Promise.any([new Promise.resolve(1),new Promise.reject(2),new Promise.reject(3),new Promise.resolve(4)])
// .then(data=> console.log("data",data))
// .catch(err=> console.log("err",err))


// //Promise.race, the first promise that resolves or reject
// Promise.race([
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("first resolve")
//         },1000)
//     }),
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(2)
//         },2000)
//     })
// ])
// .then(data=> console.log("data",data))
// .catch(err=> console.log("err",err))

//timeout 
// Promise.delay(2000)
// .timeout(2000)
// .then(()=> console.log("resolved"))
// .catch(_=> console.log("error"))

// // timeout if the promise takes more time than timeout it will reject and execute the catch block
// function test1(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("test1")
//         },3000)
//     })
// }

// test1()
// .timeout(2000)
// .then(_=> console.log("resolved from test1"))
// .catch(_=> console.log(" rejected from test1"))


// // promise.method, this will make sure that a function always returns a promise, resolve ot reject, it works exactly like promise.try, but the difference is if u use tru u need to wrap try every time u use that function ,  but with method once u wrrapped it with promise.method it will always return a promise whenever u call the function

// function test(id){
//     if(!id){
//         throw new Error("Invalid Id")
//     }
//     return Promise.resolve(id)
// }

// test(null)
// .then(data=> console.log(data))
// .catch(err=> console.log(err)) // here the catch is not executewd because the function is running synchronously, it is not returning a promise while error. to solve this we will use promise.method

// let testMethod = Promise.method(test);

// testMethod(12)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))


// promise.promisify, it allows to make promise chaining, and make centralized error handling

function func(a,b,callback){
    if(typeof a != 'number') {
      return   callback("a is not a nunber")
    }

    callback(null,a+b)
}

func(10,20,(err,res)=>{
    if(err) {
        console.log("error")
        return ;

    }
    console.log(res)
    return res;
    
})

function func1(a,b,callback){
    if(typeof a != 'number'){
       return  callback("a is not a number")
    }
    
    callback(null, a+b)

}
const asyncFunc1 = Promise.promisify(func1);

// asyncFunc1(10,20)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))


// promisifyAll, it converts all the cllbacks in a object to make them return, promise
const obj = {
    add: (a,b,callback)=> callback(null,a+b),
    sub: (a,b,callback) => callback(null,a-b)
};

Promise.promisifyAll(obj);

obj.addAsync(10,20)
.then(data=> console.log(data))
.catch(err=> console.log(err))

obj.subAsync(30,20)
.then(data=> console.log(data))
.catch(err=> console.log(err))



// Promse.reduce, exectly like normal reduce function , one add on is it can handle async values, it works sequentually, it takes one element waits one second and then adds it to accumulator

let arrReduce = [1,2,3,4,5];

Promise.reduce(arrReduce, async(acc,data)=>{
    await Promise.delay(1000);
    return acc+data
})
.then(data=> console.log(data))
.catch(err=> console.log(err))


// Prommise.filter, this also works exactly like normal filter function, but it can handle async values, it executes results parallel, first takes all result and after that duration starts checking and removes elements that fails condition

let arrFilter = [1,2,3,4,5];
Promise.filter(arrFilter, async(data)=>{
    await Promise.delay(1000);
    return data%2==0
})
.then(data=> console.log(data))
.catch(err=> console.log(err))


// function.call, normally this behaves like how it is infused, if it is placed inside a funtion it referens to window object, but if it is placed inside a class it will refer to that class
 //using call we can use  acustom object for a function that's this points to our custom object
 function thisCall(){
    console.log(this.name, this.age)
}

let obj1 = {
    name:"mehan",
    age:123
}

thisCall.call(obj1);

