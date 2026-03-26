/**
 * oru variable multiple type irukum (union)
runtime la check panni
exact type ah identify pannradhu → type guard
 */

function typeGuardFunction(a:string|number) : string | number | undefined{
    if(typeof a =="string"){
        return a.length;
    }
    if(typeof a == "number"){
        return a.toFixed();
    }

}

// instanceOf guard
class Dog{
    bark():void{
        console.log("wowwww")
    }
}

class Cat{
    meow():void{
        console.log("meowww");
    }
}

function sound(animal: Dog | Cat){
    if(animal instanceof Dog){
        animal.bark();
    }
    if(animal instanceof Cat){
        animal.meow()
    }
}

// in operator type gaurd
type car = {drive():void};
type flight= {fly():void};

function move(vehicle: car | flight){
    if("drive" in vehicle){
        vehicle.drive();
    }
    if("fly" in vehicle){
        vehicle.fly()
    }
}


// custom type guard

function isFlight(vehicle: car | flight) :vehicle is flight{
    return "fly" in vehicle;
} 


function move1(vehicle:car|flight){
    if(isFlight(vehicle)){
        vehicle.fly() 
    }
    else{
        vehicle.drive()

    }
}


