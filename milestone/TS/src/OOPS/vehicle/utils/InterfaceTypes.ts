import type { VehicleSize, VehicleType, VehicleTypeClass } from "./VehicleType.js";

export interface VehicleDetails{
    name:VehicleType,
    vehicleID:number,
    vehicleSize:VehicleSize
}

export interface ParkingSpaceInterface{
    vehicleId?:number,
    vehicleType?:VehicleTypeClass,
    vehicleSize?:VehicleSize,
    parkingDuration?:number;
    isAvailable:boolean;
}


export interface ParkingCounterDetailsInterface{
    vehicleId:number,
    vehicleType:VehicleType,
    duration:number,
    vehicleSize:VehicleSize,
    amount:number;
}