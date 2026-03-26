// using Generics with extends

// function getLengthErrorFunction<T>(data:T):number{
//     return data.length; // this gives error because, the type T dosent know if generics had length or not
// }

interface Length{
    length:number
}

function getLengthCorrectFunction<T extends Length>(data:T):number{
    return data.length
}

getLengthCorrectFunction([1,2,3]);
getLengthCorrectFunction("mehan")

// using generics with function with objects as arguments;
function getObjectValue<T, K extends keyof T>(obj:T, k:K):T[K]{
    return obj[k]
}

// making the function to get only object as arguments
function getObjectValue2<T extends object , V extends object>(obj1:T, obj2:V):T & V{
    return {...obj1,...obj2}
}

let obj1 = {name:"mehan"}
let obj2 = {name:"mehan", age:12}

getObjectValue2(obj1,obj2);


// making constraints with default structure 
function getObjectvalue3<T extends {id:number}, V extends object>(obj1:T, obj2:V) :T & V{
    return {...obj1,...obj2}
}

let obj12 = {id:123, name:"mehs"}; // here the obj12 can atleast need to have id, not constrained to have only id property
let obj13 = {name:"mehan",test:"123"};

getObjectvalue3(obj12,obj13);

function getObjectValue4<T extends object & {length:number}>(obj1:T):T{
    return obj1;
}

let obj123 = {name:"mehan",length:123};
getObjectValue4(obj123);

// using the own argument as constraint

function getObjectValue5<T extends V, V>(obj1:T, obj2:V):T&V{
    return {...obj1,...obj2};
}

let obj14 = {id:123,name:"mehan",palace:"1aadasd"};
let obj15 = {id:123,name:"test",palace:"qweqwe"};

getObjectValue5(obj14,obj15);