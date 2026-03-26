import type { ParkingSpaceInterface } from "./utils/InterfaceTypes.js";

export class ParkingSpace{

    parkingSpaceDetails:ParkingSpaceInterface;

    constructor(){
        this.parkingSpaceDetails = {
            isAvailable:true
        };
    }

}