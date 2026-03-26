// moethod overloading=> same function name but different arguments, 

class MethodOverloadingClass{
    add(a:number,b:number):number;
    add(a:string,b:string):string;
    
    add(a:string | number,b:string | number):string | number{

        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }

        if (typeof a === "string" && typeof b === "string") {
            return a + b;
        }

        return "error"; // this could be string or number 
    
    }
}


// Method Overriding => same function name but different implementation
class Animal{
    speak(){
        console.log("Animal Speaking");
    }
}

class Dog extends Animal{
    speak(){
        super.speak() // this will also execute the speak method in animal
        console.log("Dog Barking");
    }
}

const dog = new Dog();
dog.speak();