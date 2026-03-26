"use strict"
x = 10; //gives error
console.log(x);

function func() {}
let a =10;
// delete a; //gives error
// delete func; //gives error

function func(a,a,b){ //multiple arguments with same name gives error
    return a+b

}

console.log(func(1,2,3))


//these are reserved keywords
let public=0;
let static = 12;
console.log(public,static);
