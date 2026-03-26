// // oops is intruduced because in early days, when the code base grows, it gets messy,more functions, variables, more number of arguments, multiple teams working across the same codebase, so if a changes is made in a code by a team the other teams using it will, not notice it, so oops will help to opganise data members and function inside a  class, its easy to maintain


// // we can decalere classes in two ways 
// // class declaration
// // class expression

// //class declaration is a normal class declaration with class method

class Animal{
    constructor(name){
        this.name = name;
    }

   speak(){
        return `speak from: ${this.name}`
    } // if no return statement it will return undefined
}

let dog = new Animal("dog");
console.log(dog.speak());


// // class expression, literally we can store a class inside a variable, and we can create it with name and without name

let car = class{
    constructor(year,model){
        this.year = year;
        this.model = model
    }

    getModel(){
        return `car model: ${this.model}`
    }
    
    getYear(){
        return `car year: ${this.year}`
        
    }
}

let skoda = new car(2026,"skoda_1");
console.log(skoda.getModel())
console.log(skoda.getYear())


let bike = class Gear{
    constructor(gear){
        this.gear = gear
    }

    getGear(){
        return `gear: ${this.gear}`
    }
}
let pulsar = new bike("pulsar");
console.log(pulsar.getGear())


// // Diff of named and unnamed, class expression, 

// example using unamed class expression
let val1 = class{
     count(n){
        if(n==0) return;
        console.log(n);
        new val1().count(n-1)
    }
}
let ans = val1;
new ans().count(5);

//example using named class expression
let val2 = class test123{
    count(n){
        if(n==0) return;
        console.log(n);
        new test123().count(n-1)
    }
}
let ans1 = new val2().count(5);


// //self invoking class expression
let val3 = new (class{
    constructor(name){
        this.name = name
    }

    getName(){
        return `name123: ${this.name}`
    }
})("mehan")

console.log(val3.getName())
