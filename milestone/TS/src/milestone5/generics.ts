// generics are used to create reusable code, that ca work with different types, without loosing ts's type saftey, 
// to do this we can use any, but it just randomly allow multiple types, it dosent do type checking, it cuts the connection(input and  opt should be same type) input and output
// generic captures the type if we used it, and it make sure the input and output should be same type

//"value enna type vandhalum same type return pannu"
// type of value is decided when the function is called


//<T> oru placeholder mathiri. Neenga function-ah call pannum podhu enna type kudukureengalo, TS adhayae fix pannikum.


// Generic in functions
function getargument<T>(name:T):T{
    return name;
}

console.log(getargument("mehan"));
console.log(getargument(1));

/**
 * it changes the type of T, with the type that is passed to the function
 */


// realworld example, here we are using generics in interface to send out custom, data to apply to it
interface ApiResponse<Data>{
    id:number,
    status:boolean,
    res:Data
}

interface User{
    id:number,
    name:string
}

interface Product{
    id:number,
    status:boolean,
    name:string
}

let obj1: ApiResponse<User> = {
    id:1,
    status:true,
    res:{id:1,name:"mehan"}
}

let obj2: ApiResponse<Product> = {
    id:1,
    status:true,
    res:{id:1,status:true,name:"test"}

}

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
    return obj[k];
}


// using multiple generics
function converter<T,U>(val:T, transform:(arg:T)=>U):U{
    return transform(val);
}

function transformer<T>(val:T):string{
    return "this value is "+val ;
}

converter("1",transformer);



