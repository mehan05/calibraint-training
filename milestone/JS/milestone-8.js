// recursion

// pow func
function pow(x, n) {
  if (n == 1) return x;
  return x * pow(x, n - 1);
}
// console.log(pow(2, 3));

// factorial
function fact(n) {
  if (n == 1) return 1;
  return n * fact(n - 1);
}
// console.log(fact(5));

// function returning functon
function parent() {
  let a = 10;
  function child() {
    return a;
  }

  return child();
}

// console.log(parent());

// traversing matrix using recursion
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [6, 7, 8],
];
function matrixTraversal(arr, row) {
  if (row >= arr.length) {
    return;
  }

  for (let i = 0; i < arr[row].length; i++) {
    console.log(arr[row][i]);
  }

  matrixTraversal(arr, row + 1);
}
// matrixTraversal(arr, 0);


// function methods



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


//callback
// callback means a function is passed as a argument to another function
function callback(flag, yes, no) {
  console.log("waiting for set timeout");
  // setTimeout(()=>{
  //     console.log("this is from setTimeout")
  // },3000)
  console.log("logging contents from callback");
  return flag ? yes() : no();
}

function yes() {
  console.log("yes");
}

function no() {
  console.log("no");
}

// callback(1, yes, no);
// callback(0,yes,no)
console.log("-------------------------------------------------------------");

//callbackhell
function add(val, callback) {
  callback(val + 5);
}

function sub(val, callback) {
  callback(val - 2);
}

function mul(val, callback) {
  callback(val * 5);
}

function div(val, callback) {
  callback(val / 2);
}

function display(val) {
  console.log(" the value is", val);
}

// add(10, function(val){
//     sub(val, function(val){
//         mul(val, function(val){
//             div(val, function(val){
//                 display(val)
//             })
//         })
//     })
// });

// Avoid call backhell,

function addPromise(val) {
  return new Promise((resolve) => {
    resolve(val + 5);
  });
}

function sumPromise(val) {
  return new Promise((resolve) => {
    resolve(val - 2);
  });
}

function mulPromise(val) {
  return new Promise((resolve) => {
    resolve(val * 5);
  });
}

function divPromize(val) {
  return new Promise((_, reject) => {
    reject(`cant divide number: ${val}`);
  });
}

// addPromise(5)
// .then(data=>{
//     console.log("data from add",data);
//     return sumPromise(data)
// })
// .then(data=> {
//     console.log("data from sub",data)
//     return mulPromise(data)
// })
// .then(data=> {
//     console.log("data from mul",data)
//     return divPromize(data)
// })
// .then(data=>{
//      console.log("data from div",data);
// })
// .catch(error=> console.log(error))

// function  testPromise() {
//     console.log("test promise called")
//     return new Promise((resolve,reject)=> {
//         return resolve(10)
//     })
// }

// testPromise()
// .then(data => new Promise(resolve=> resolve(data)))
// .then(data=> console.log("test123",data));

// console.log(testPromise());

// callback hell new example
function prepareIngridents(order, callback) {
  setTimeout(() => {
    console.log("preparing ingridents for ", order);
  }, 1000);
  callback("ingridents");
}

function cookPizza(ingridents, callback) {
  setTimeout(() => console.log("Cooking pizza with", ingridents), 2000);
  callback("pizza");
}

function package(pizza, callback) {
  setTimeout(() => console.log("packing pizza", pizza), 3000);
  callback("package");
}

function deliverPizza(package) {
  setTimeout(() => console.log("delivering pizza with package", package), 4000);
}


// prepareIngridents("order",function(ingridents){
//     cookPizza(ingridents,function(pizza){
//         package(pizza,function(package){
//             deliverPizza(package)
//         })
//     })
// })


// promise chaining  // doubt in resolving promise as resolve({name:"test"}) , then receives this as undefined 
function prepareIngridents(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("preparing ingridents for ", order);
      resolve({ingridents:"ingridents"})
    }, 1000);
    // resolve("Ingridents");
  });
}

function cookPizza(ingridents) {
  return new Promise((resolve) => {
    setTimeout(() => console.log("Cooking pizza with", ingridents), 2000);
    resolve("pizza");
  },2000);
}

function package(pizza) {
  return new Promise((resolve) => {
    setTimeout(() => console.log("packing pizza", pizza), 3000);
    resolve("package");
  },3000);
}

function deliverPizza(package) {
  return new Promise((resolve) => {
    setTimeout(
      () => console.log("delivering pizza with package", package),
      4000,
    );
    resolve("delivered");
  });
}


// prepareIngridents("order")
//   .then(({ingridents}) => {
//     console.log("Message from preparing Ingridents:",ingridents);
//    return cookPizza(ingridents);
//   })
//   .then((data) => package(data))
//   .then((data) => deliverPizza(data))
//   .catch((error) => {
//     console.log(error);
//   });


// promises using async await
function prepareIngridents(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("preparing ingridents for ", order);
    }, 1000);
    resolve("ingridents");
  });
}

function cookPizza(ingridents) {
  return new Promise((resolve) => {
    setTimeout(() => console.log("Cooking pizza with", ingridents), 2000);
    resolve("pizza");
  });
}

function package(pizza) {
  return new Promise((resolve) => {
    setTimeout(() => console.log("packing pizza", pizza), 3000);
    resolve("package");
  });
}

function deliverPizza(package) {
  return new Promise((resolve) => {
    setTimeout(
      () => console.log("delivering pizza with package", package),
      4000,
    );
    resolve("delivered");
  });
}

// async function processOrder() {
//   try {
//     const ingridents = await prepareIngridents("order");
//     const cookpizza = await cookPizza(ingridents);
//     const packaging = await package(cookpizza);
//     await deliverPizza(packaging);
//   } catch (error) {
//     console.log(error);
//   }
// }

// processOrder();




// if u use catch in between a series of then, if the respective promise of that catch is rejected then the catch executed and after that the next then 
// will get executed
function inBetweenCatchExample(){
    return new Promise((resolve,reject)=>{
        // resolve(1)
        reject(2)
})
}

// inBetweenCatchExample()
// .then(data=> {
//     console.log("data from promise1",data)
//     return  Promise.resolve(data)
// })
// .catch(error=> {
//     console.log("error from promise1",error)
//     return  error;
// })
// .then(data=>  {
//     console.log("data from promise2", data);
//     return Promise.reject(data)
// })
// .catch(error=> console.log("error from promise2"))






//promise API's

// promise.all
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  "https://nourl"
  // 'https://api.github.com/users/jeresig'
];

// let requests = urls.map(ele=> fetch(ele));
// Promise.all(requests)
// .then(res=> console.log(res))
// // .then(res=> res.forEach(data=> console.log(data)))
// .catch(err=> console.log("err"))
// console.log(requests.length);  

// // promise.allSettled
// let urls_1 = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];

// let request = urls_1.map(ele=> fetch(ele))
// Promise.allSettled(request)
// .then(res=> console.log(res.length)) 
// .catch(err=> console.log(err))


// here race dosen't care about the order of the promises,  which one first settels(resolve or reject)
// it will run it and the remeining promises would also still executes
// let urls_2 = [
//    new Promise((re,rj)=> setTimeout(()=> {re("timeout1"); console.log("executed 1 backend");
//    },5000)),
//    new Promise((re,rj)=> setTimeout(()=> rj("timeout2"),1000)),
//    new Promise((re,rj)=> setTimeout(()=>{ re("timeout3"); console.log("executed 3 backend");},4000)),
// ]

// Promise.race(urls_2)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))

//opt: 
// timeout2
// executed 3 backend
// executed 1 backend


// promise.any
// let url_4 = [
//   new Promise((re,rj)=> setTimeout(()=> re("timeout1"),2000)),
//   new Promise((re,rj)=> setTimeout(()=> rj("timeout2"),1000)),
//   new Promise((re,rj)=> setTimeout(()=> re("timeout3"),4000)),
// ]

// Promise.any(url_4)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))



// polyfill 
// some old broswers not support the promise.allSettle method, so we are writing our own allSettle method

// example for example by defaut we dont have checkElementPresence method
let arr_1 = [1,2,4]
// console.log(arr_1.checkElementPresence(1)); // array prototype does not have this 

// now we are writing our own includes method
if(!Array.prototype.checkElementPresence){
  Array.prototype.checkElementPresence  = function(ele){
        for(let i=0;this.length;i++){
          if(this[i]==ele){
              return {presence:true,index:i}
          }
        }
  }
}
// console.log(arr_1.checkElementPresence(2));


// the above is a example for custom pollyfill, 
// we'll see polyfill using promises for allsettle

if(!Promise.allsettle){
  let resolveObject =  value=>  ({ status:'fulfilled', value})
  let rejectObject = reason => ({status: 'rejected' , reason})

  Promise.allsettle = function(promiseIterator){
    let resolvedPromises = promiseIterator.map((ele)=> Promise.resolve(ele).then(resolveObject,rejectObject) );
    return  Promise.all(resolvedPromises);
  };
}

// lets test this  allSettle custom prototype function 
let  promises_12 = [
  new Promise((resolve)=> resolve(setTimeout(()=> console.log("timeout1"),3000))),
  new Promise((resolve)=> resolve(setTimeout(()=> console.log("timeout2"),4000))),
  new Promise((resolve)=> resolve(setTimeout(()=> console.log("timeout3"),5000))),
];
Promise.allsettle(promises_12)
.then(data=> console.log(data))
