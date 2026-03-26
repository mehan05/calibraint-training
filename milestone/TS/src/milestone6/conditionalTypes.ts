// conditional types works like a if else for types 

// syntax =>  T extends U ? X : Y

// check isString
type IsString<T> = T extends string ? "yes" : "no";

type str = IsString<string>
type num = IsString<number>;

// check IsArray
type IsArray<T> = T extends any[] ? "yes" :"no";

type arr = IsArray<number[]>;

// union members in conditional

type IsString2<T> = T extends string ? "yes" : "no";
type str1 = IsString2<number | string>;
// str1 = "no" | "yes" , when using union type ts runs the condition for every genric type


//what is infer?
/**
 * infer is a way to give a name to a type inside another type.
It lets TypeScript look inside a type (like a Promise, array, or function) and capture the type it contains, so you can use it.
 */

// extract type from array
type inferType<T> = T extends (infer U)[] ? U : never;
type A=inferType<string[]>;


// extract type from promise
type inferPromise<T> = T extends Promise<infer U>? U :never;
type B = inferPromise<Promise<string>>;


// extract function return type
type inferFunction<T> = T extends (...arg:any[])=>infer R ? R : never;


