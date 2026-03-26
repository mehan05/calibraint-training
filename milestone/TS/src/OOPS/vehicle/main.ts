import { ParkingCounter } from "./parkingCounter.js";
import { ParkingGround } from "./parkingGround.js";
import type { ParkingLane } from "./parkingLane.js";
import { VehicleSize, VehicleType, type VehicleTypeClass } from "./utils/VehicleType.js";
import { Car } from "./vehicle.js";

class Main{
    parkingGround:ParkingGround;
    parkingCounter:ParkingCounter;
    constructor(){
        this.parkingGround = new ParkingGround(10, 10);
        this.parkingCounter = new ParkingCounter(this.parkingGround);
    }

    bookParkingSpace(vehicleId:number, vehicleType:VehicleTypeClass, duration:number){
        if(duration<3600000){
            return "Duration should be greater than 1 hour"
        }
        this.parkingCounter.bookSpace(vehicleId, vehicleType, duration);
    }

    exitParkingSpace(vehicleId:number){
        this.parkingCounter.exitParkingSpace(vehicleId);
    }

    getParkingGroundDetails():ParkingLane[] {
        return this.parkingGround.getParkingGroundDetails();
    }

}

const main = new Main();
const car = new Car(VehicleType.CAR, 1, VehicleSize.MEDIUM);
console.log(main.bookParkingSpace(1, car,3600000));
console.log(main.getParkingGroundDetails())
console.log(main.exitParkingSpace(1));

