// it means already irrukura type a oru type or interface ah innoru type ah transform or filter, pannidum

// partial => optional ah consider pannum
// pick => yethu venumo atha particular ah pick pannalam
// readonly => only we can read, cant change it
// required => opposite to partial (default)
// omit => it will not consider the ommiited properties
// exclude
//extract
// record => Record<k,t> => k la irruka yella keys yum object la irrukum , values types la t ah irrukum


/**
 *  difference between, pick and extract, exclude and omit, 
 */

// omit vs exclude
/*
    1) omit can work with object types
    2) exclude can only wotks with union types
*/

// pick and extract
/*
    1) pick can work with object types
    2) extract can only wotks with union types
*/



// partial
interface User{
    name:string,
    age:number,
    place:string
}

type obj1Type = User;

function acceptingPartialArguments(obj:Partial<obj1Type>){
    return obj.name
    /**
     * internally it creates a new anonympous type or interface(where it used) as
     * User{
     * name?:string,
     * age?:number,
     * place?:string
     * }
     */
}


// required
interface User1{
    name:string,
    age:number,
    place:string
}


let  user1:Required<User1> = {
    name:"mehan",
    age:23,
    place:"india"
}


// pick
type User2 ={
    name:string,
    age:number,
    place:string
}

let user2:Pick<User2,"name"| "age"> = { // pick runs twice one for name and another time for  age
    name:"mehan",
    age:23
}/**
    internally it creates a new anonymous type  as 
    User2{
        name:string,
        age:number
    }

*/


// Omit
interface User3 {
    name:string,
    age:number,
    place:string
}

let user3:Omit<User3,'name'|'age'> = {
    place:"test"
}
//type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

/**
 *  internally it created a new interface like 
 *  User3{
 *  place:string
 * }
 */


// using utility tyoes in function return type 
interface User4{
    id:number,
    name:string,
    place:string
}

function omitIdFromObject<T extends User4>(obj:T):Omit<T,'id'>{
    let {id,...rest} = obj;
    return rest; // it allows us to return only the remainig data without id

}

omitIdFromObject({id:1,name:"test",place:"test2"})

// nested usage
interface User6{
    id:number,
    name:string,
    place:string
}

type nestedType = Readonly<Omit<User6, 'name'|'place'>>;

let objUser6:nestedType={
    id:123
}


// Record

type ObjRecordType = Record<string,number>;
let obj1: ObjRecordType={
    1:123, // internally it take 1 as "1"
    age:123
};

interface Values{
    id:number
}
// fixed keys in record
type fixedKeys = "admin" | "guest" | "user";
let obj12: Record<fixedKeys,Values>={
    admin:{id:1},
    guest:{id:1},
    user:{id:1}    
}

// exclude
type excludeType = 'red' | 'blue' | 'green';
let color:Exclude<excludeType,"blue"> = "red";

type t1 = { a: number }
type t2 = { b: number }
type t3 = { c: number }

type all = t1 | t2 | t3;

let testAll: Exclude<all, t1> = { b: 1 };

// extract => opposite to exclude, it only include the spicified types
type extractType = 'red' | 'blue' | 'green';
let colorExtract:Extract<excludeType,"blue"> = "blue";


// insertion  operator
type A = "a" | "b";
type B = "b" | "c";

type C = A & B;

//c = 'b'

// instanceType, when u have a class constructor,  but u need the type of object created using that constructor, at that time we will use it

class User{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Product {
    name:string
    constructor(name:string){
        this.name = name;
    }
}

function createClass<T extends new (...args:any[])=>any>(c:T,names:string): T{
    return new c(names);
}

let c = createClass(User,"mehan");

// let v:User  = new User("mehan");
// let v1:InstanceType<typeof User> = new User("mehan");