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

