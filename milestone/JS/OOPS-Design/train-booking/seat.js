export class Seat{
   static seatCounter = 1;
    constructor(type){
        Seat.seatCounter++;
        this.map = new Map();
        this.map.set(Seat.seatCounter,{type,isBooked:false});
    }

    getSeatDetails(seatNumber){
        this.map.get(seatNumber);
    }
}