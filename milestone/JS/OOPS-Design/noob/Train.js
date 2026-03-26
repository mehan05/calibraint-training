class Ticket{
    constructor(ticketID, fromDestination, toDestination, seatNumbers, compartmentNumber, trainName){
        this.ticketID = ticketID;
        this.fromDestination = fromDestination;
        this.toDestination = toDestination;
        this.seatNumbers = seatNumbers;
        this.compartmentNumber = compartmentNumber;
        this.trainName = trainName,
        this.ticketStatus = "active";
    }

    getTicketDetails(){
        return {
            ticketID : this.ticketID,
            fromDestination : this.fromDestination,
            toDestination : this.toDestination,
            seatNumbers : this.seatNumbers,
            compartmentNumber : this.compartmentNumber,
            trainName : this.trainName
        }
    }

    cancelTicket(){
        this.ticketStatus = "not-active"
    }
}

class Train{

    #map = new Map();


    constructor(trainId,name,startDestination,endDestination,compartmentCount,seatsPerCompartment){
        this.name = name;
        this.trainId = trainId;
        this.startDestination = startDestination;
        this.endDestination = endDestination;
        this.compartmentCount = compartmentCount;
        this.seatsPerCompartment = seatsPerCompartment;
        this.compartment = [];
        
    }
    
    getTrainDetails(){
        return {
            name : this.name,
            startDestination : this.startDestination,
            endDestination : this.endDestination,
            compartmentCount : this.compartmentCount,
            seatsPerCompartment : this.seatsPerCompartment
        }
    }

    addStations(stationName){
        this.#map.set(stationName,0);
    }


    getmap(){
        return this.#map;
    }

    setMap(map){
        this.#map = map;
    }
   
    createCompartment(){
        console.log("compartment length",this.compartment.length);
        console.log("compartment count",this.compartmentCount);
        if(this.compartment.length > this.compartmentCount){
            console.log("compartment count exceed");
            return "compartment count exceed";
        }
        for(let i=0;i<this.compartmentCount;i++){
            let seats = [];
            for(let j=0;j<this.seatsPerCompartment;j++){
                seats.push({
                    seatNumber : 'S'+j,
                    avaliability: true
                })
            }

            this.compartment.push(
                {
                    compartmentName:'C'+i,
                    seats
                } 
            )
        }
        
    }

    allocateSeats(seatCount){
        for(let i of this.compartment){
            let arr = []
            
            if(seatCount<=i.seats.length){
                for(let j=0;j<seatCount;j++){
                    i.seats[j].avaliability = false;
                    arr.push(i.seats[j])
                }

                return {
                    compartmentNumber : i.compartmentName,
                    seatNumbers : arr
                }
            }
        }
    }

    freeSeats(compartmentID,seatCount){
        for(let i of this.compartment){
            if(i.compartmentName==compartmentID){
                for(let j=0; j<seatCount;j++){
                    i.seats[j].avaliability = true;
                }
            }
        }
    }


}

class BookingManager{

    trains = [];
    tickets = [];
    
    addTrain(trainId,name,startDestination,endDestination,compartmentCount,seatsPerCompartment){
        let train = new Train(trainId,name,startDestination,endDestination,compartmentCount,seatsPerCompartment);
        console.log("train123",train);
        this.trains.push(train);

    }

    searchTrain(trainId){
        let train  = this.trains.find(train=> train.trainId = trainId);
        return train;
    }

    createTicket(fromDestination,toDestination,seatNumbers,compartmentNumber,trainName){
        let ticket = new Ticket(this.tickets.length,fromDestination,toDestination,seatNumbers,compartmentNumber,trainName);
        this.tickets.push(ticket);
        return ticket;
    }

    searchTicket(ticketID){
        let ticket = this.tickets.find(tik=> tik.ticketID == ticketID);
        return ticket;
    }

    addCompartment(trainId,compartmentName){
        let train = this.searchTrain(trainId);
        train.addCompartment(compartmentName);
    }


    createCompartments(trainId){
        let train = this.searchTrain(trainId);
        train.createCompartment();
        train.createCompartment();
        train.createCompartment();
    }

    getAllData(trainId,ticketID){
        let train = this.searchTrain(trainId);
        let ticket = this.searchTicket(ticketID);
        console.log("train",train);
        console.log("ticket",ticket);
    }



    bookTrain(trainId,fromDestination,toDestination,seatCount){

            let train = this.searchTrain(trainId);
            // console.log("test",train);
            let map = train.getmap();
            let started = false;

            if(!((fromDestination>=train.startDestination&& toDestination<=train.endDestination)&& seatCount<=train.seatsPerCompartment)){
                console.log("Give valid inputs");
                return "Give valid inputs";
            }

            for(let [station,bookedSeatCount] of  map){
                if(fromDestination==station){
                    started = true
                }
                
                if(started){
                    
                    if((bookedSeatCount+seatCount)>train.seatsPerCompartment){
                        console.log("seat count exceed");
                        return "seat count exceed";
                    }
                    else{
                        map.set(station,map.get(station)+seatCount);
                    }
                }

                if(station==toDestination){
                    started = false;
                    break;
                }

            }

            let allocated = train.allocateSeats(seatCount);
            this.createTicket(fromDestination,toDestination, allocated.seatNumbers,allocated.compartmentNumber, train.name);

            train.setMap(map);
            
    }


    cancelTicket(ticketID){
        let ticket  = this.searchTicket(ticketID);
        let train = this.train.find(t=> t.name== ticketID.trainName);
        train.freeSeats(ticket,compartmentNumber,ticket.seatNumbers.length);
        ticket.cancelTicket();
        return "Ticket cancelled successfully";
    }
     
}

let bookingManager = new BookingManager();
bookingManager.addTrain(1,"train1","pune","mumbai",5,4);
bookingManager.createCompartments(1);
bookingManager.bookTrain(1,"pune","mumbai",2);
bookingManager.bookTrain(1,"pune","mumbai",3);
bookingManager.getAllData(1,0);



