/**
 * Constructor overloading na ore class-la object create panna different parameter combinations allow pannurathu.

But actual-ah runtime-la ore constructor implementation dhaan irukkum; overload signatures type checking-ku mattum use aagum.
 */

class Person{
    name:string;
    // constructor(name:string)a", 12);
// const p2 = new Person("meha",12);
    // constructor(name:string,age:number)
    constructor(name:string,age?:number){
        this.name =name;
        console.log(name,age);
    }
}


const p = new Person("meha");
// const p1 = new Person("meha", 12);
// const p2 = new Person("meha",12);