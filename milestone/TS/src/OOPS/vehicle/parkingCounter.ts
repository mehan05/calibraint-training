import type { ParkingGround } from "./parkingGround.js";
import type { ParkingLane } from "./parkingLane.js";
import type { ParkingSpace } from "./parkingSPace.js";
import type { VehicleSize, VehicleType, VehicleTypeClass } from "./utils/VehicleType.js";

export class ParkingCounter{

        private amountPerHour:number = 100;
        parkingGround:ParkingGround;

        constructor(parkingGround:ParkingGround){
            this.parkingGround= parkingGround;
        }

        calculateAmount(duration:number):number{
            const amount = this.amountPerHour * (duration/60/60/1000);
            return amount
        }

        bookSpace(vehicleId:number, vehicleType:VehicleTypeClass, duration:number){
            for(let lane of this.parkingGround.parkingLanes){
                for(let space of lane.parkingSpaces){
                    if(space.parkingSpaceDetails.isAvailable==false){
                        space.parkingSpaceDetails.vehicleId = vehicleId;
                        space.parkingSpaceDetails.vehicleType = vehicleType;
                        space.parkingSpaceDetails.parkingDuration = duration;
                        space.parkingSpaceDetails.vehicleSize = vehicleType.getVehicleDetails().vehicleSize;
                        space.parkingSpaceDetails.isAvailable = false;
                        return "Space Booked Successfully"
                    }
                }
            }
        }

        exitParkingSpace(vehicleId:number){
            for(let lane of this.parkingGround.parkingLanes){
                for(let space of lane.parkingSpaces){
                    if(space.parkingSpaceDetails.vehicleId == vehicleId){
                        if(!space.parkingSpaceDetails.isAvailable){
                            let amount = 0;
                            if(space.parkingSpaceDetails.parkingDuration){

                                amount = this.calculateAmount(space.parkingSpaceDetails.parkingDuration);
                            }
                            else{
                                return "Duration not found Error, Cant exut"
                            }
                            space.parkingSpaceDetails.isAvailable = false;
                            return amount;
                        }
                        else{
                            return "Space not booked buy this vehicle"
                        }
                    }
                }
            }
        }






}