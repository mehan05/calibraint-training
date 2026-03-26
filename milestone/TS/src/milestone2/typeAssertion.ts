export default function typeAssertion(){

    // it simply means we are telling the typescript compiler to temporarily treat a value's type as something we tell
    let a:unknown = "mehan";
    // console.log(a.length); // gives error, because we cant take length from unknown
    console.log((a as string).length); 
    // we can also use <> instead of as
    console.log((<string>a).length);
    // but < > is only recommended to use in .ts , not in react, because it has html tags
     // here as just tells the compiler to treat the value as string, it does not change the value's type to string


     let b:unknown = 1;
     console.log((b as any).length);
     // here as any pasuses the type checking and allows the value to be treated as any type

     // as const 
     let name = "mehan" as const;
     // normally the type of name is string, after as const the type of name becomes "mehan"
     
     let err = [1,2,3] as const;
     // normally the type of err is number[], after as const the type of err becomes realonly [1,2,3]


     let obj = {
        name:"mehan",
        age:123,
        palce:"india"
     } as const
     /**
      * normally the type of obj is {name:string,age:number,palce:string}, after as const the type of obj becomes {
                readonly user: {
                    readonly name: "mehan";
                };
                }   
      */

     type types = {
        name:String,
        age:Number,
        palce:String
     }

     let obj1 = {} as types;
     console.log(obj1);

// difference between as and satisfies

// while using as
// type User = {name:string}
// let u1 = {
//     name:"mehan",
//     age:1232
// }as User;
// console.log(u1.age); // here it will shows error,  because as changes the original inference type 

// let u2 = {
//     name:"mehan",
//     age:1232
// }satisfies User;

// console.log(u2.age); // satisfies will not change the original inference type, it only checks structural wise, but age:1232 will give error



}