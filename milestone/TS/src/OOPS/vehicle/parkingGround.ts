import { ParkingLane } from "./parkingLane.js";

export class ParkingGround{
    parkingLanes:ParkingLane[];
    constructor(noOfLanes:number, noOfParkingSpacePerLane:number ){
        this.parkingLanes = [];
            for(let i=1;i<=noOfLanes;i++){
                this.parkingLanes.push(new ParkingLane(noOfParkingSpacePerLane))
            }
    }

    getParkingGroundDetails():ParkingLane[] {
        return this.parkingLanes;
    }
}