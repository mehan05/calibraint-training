//Factory Patter:  keep object creation logic in seperate class, and create objects without directly using new keyword, instead create objects inside a class when specific condition matches
abstract class Vehicle{
    abstract drive():void;
}

class Car extends Vehicle{
     drive(): void {
         console.log("driving car")
     }
}


class Bike extends Vehicle{
    drive(): void {
        console.log("Driving Bike");
    }
}


class VehicleFactory {
    static createVehicle(vehicleType:string){
        if(vehicleType=="car"){
            return new Car()
        }
        if(vehicleType == "bike"){
            return new Bike()
        }
        throw new Error("Unknown Vehicle");
    }

}

let vehicle = VehicleFactory.createVehicle("car");
vehicle.drive();