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
