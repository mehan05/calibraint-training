

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