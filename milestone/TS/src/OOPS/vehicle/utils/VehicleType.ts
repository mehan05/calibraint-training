import { Bike, Car, Truck } from "../vehicle.js";

export enum VehicleType{
    CAR = "CAR",
    BIKE = "BIKE",
    TRUCK  = "TRUCK",
}

export type VehicleTypeClass = Car | Bike | Truck

export enum VehicleSize{
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE"
}