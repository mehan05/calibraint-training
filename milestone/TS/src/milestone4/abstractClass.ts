// cant create objects for abstract class, its used like a blueprint for other clcasses
abstract class AbstractClassAnimal{
    protected name:string;
    constructor(name:string){
        this.name = name;
    }

    walk():void{ // this is a normal function
        console.log(`${this.name} can walk`);
    }

    abstract sound():void;  // child classes must implements this function
}

class Dog extends AbstractClassAnimal{
    constructor(name:string){
        super(name)
    }

    sound():void{
        console.log("Woofff");
    }
}

const dog1 = new Dog("dog");
dog1.sound();