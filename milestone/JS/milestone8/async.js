
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