import { Compartment } from "./compartment.js";

export class Train{
    
    constructor(trainId, startDestination, endDestination){
        this.trainId = trainId;
        this.startDestination = startDestination;
        this.endDestination = endDestination;
        this.compartments = [];
    }

    initializeCompartments(compartmentCount){

        for(let compartment=0;compartment<compartmentCount;compartment++){
            let compartment = new Compartment();
            this.compartments.push(compartment);
        }        

    }

    getFullTrainDetails(){
        return {
            trainId : this.trainId,
            startDestination : this.startDestination,
            endDestination : this.endDestination,
            compartments : this.compartments
        }
    }

    getCompartmentDetails(compartmentNumber){
        return this.compartments[compartmentNumber];;
    }

}
