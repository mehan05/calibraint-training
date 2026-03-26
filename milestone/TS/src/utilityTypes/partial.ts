// it makes all properties of a object optional 
interface User {
    name:string,
    age:number,
    place:string
}

let user1:Partial<User>={
    name:"mehan",
    age:23
} // this works because partial made all the properties as optional


interface UserDetails{
    name:string,
    age:number,
    address:{
        country:string,
        state:string
    }
}


type PartialUserDetails = Partial<UserDetails> // partial is shallow
/**
 * name?:string,
 * age?:number,
 * address?:{
 *     country:string,
 *     state:string
 * }
 */




type A = {
  readonly id: number;
  name: string;
};

type B = Partial<A>;
/**
 * readonly id?: number;
 * name?: string;
 */