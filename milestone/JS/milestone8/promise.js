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