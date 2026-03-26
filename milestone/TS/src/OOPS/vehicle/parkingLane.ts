import { ParkingSpace } from "./parkingSPace.js";

export class ParkingLane{
    noOfParkingSpacePerLane:number;
    parkingSpaces:ParkingSpace[];
    constructor(noOfParkingSpacePerLane:number){
        this.noOfParkingSpacePerLane = noOfParkingSpacePerLane;
        this.parkingSpaces = [];
        for(let i=1;i<=noOfParkingSpacePerLane;i++){
            this.parkingSpaces.push(new ParkingSpace())
        }
    }
}