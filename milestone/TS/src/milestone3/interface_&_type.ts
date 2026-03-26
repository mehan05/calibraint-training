// both interface and types are used to define types for the object
// but both of theses have different usecases.

interface objType{
    name:string,
    age:number,
    place:string
}

type objType2  = {
    name:string,
    age:number,
    place:string
}

// difference between type and interface

//interface supports merging with same names, but type can't
interface objType{
    address:string
}

// type objType2  = {
//     address:string
// }  // gives error


// extending interfaces
interface objType1 extends objType{
    country:string
}

// extending multiple interfaces
interface objType3 extends objType, objType2{
    world:string
}

// twisted example
interface A {
  id: string;
}

interface B {
  id: number;
}
// @ts-ignore
interface C extends A, B {} // Error id type mismatched

type A1 = {age:number};
type B1 = {age:string};
type C1 = A1 & B1; // the type of C1 is never

// in types we can use union operator
type status = "active" | "inactive";

// we can also use insertion (and) operator
type type1 = {
    name:string
}

type type2 ={
    age:number
}

type type3 = type1 & type2;

// type for function
type funcType = (a:string)=> string

//string literals
type color = "red" | "green" | "blue";
let colours:color = "red" // works
// let colours2:color = "violet" // gives error , because type donsent have violet


type t1 = 1 | 2 | 3;
let type1:t1 =1;
// let type1:t1 = 5; // gives error
console.log(type1);
