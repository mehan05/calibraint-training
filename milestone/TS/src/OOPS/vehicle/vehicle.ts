import type { VehicleDetails } from "./utils/InterfaceTypes.js";
import type { VehicleSize, VehicleType } from "./utils/VehicleType.js";

abstract class Vehicle{
    name:VehicleType;
    vehicleID:number;
    vehicleSize: VehicleSize
    constructor(name:VehicleType, vehicleID:number, vehicleSize:VehicleSize){
        this.name = name;
        this.vehicleID = vehicleID;
        this.vehicleSize =vehicleSize 
    }

    abstract getVehicleDetails():VehicleDetails;
}

export class Car extends Vehicle{
    constructor(name:VehicleType, vehicleID:number, vehicleSize:VehicleSize){
        super(name,vehicleID,vehicleSize);
    }

    getVehicleDetails(): VehicleDetails {
        return {
            name:this.name,
            vehicleID:this.vehicleID,
            vehicleSize:this.vehicleSize
        }
    }
}

export class Bike extends Vehicle{
    constructor(name:VehicleType, vehicleID:number, vehicleSize:VehicleSize){
        super(name,vehicleID,vehicleSize);
    }

    getVehicleDetails(): VehicleDetails {
        return {
            name:this.name,
            vehicleID:this.vehicleID,
            vehicleSize:this.vehicleSize
        }
    }
}

export class Truck extends Vehicle{
    constructor(name:VehicleType, vehicleID:number, vehicleSize:VehicleSize){
        super(name,vehicleID,vehicleSize);
    }

    getVehicleDetails(): VehicleDetails {
        return {
            name:this.name,
            vehicleID:this.vehicleID,
            vehicleSize:this.vehicleSize
        }
    }
}

