import { Train } from "./Train.js";

class Main{
    constructor(trainId,startDestination,endDestination){
        this.train   = new Train(trainId,startDestination,endDestination);
    }

    initializeCompartments(noOfCompartments){
        this.train.initializeCompartments(noOfCompartments);
    }

    getTrainDetails(){
        let trainDetails = this.train.getFullTrainDetails();
        for(let key of Object.keys(trainDetails)){
            if(trainDetails[key] instanceof Array || trainDetails[key] instanceof Object){
                this.printArray(trainDetails[key]);
            }
                console.log(`${key}:${trainDetails[key]}`)
        }
        // console.log(trainDetails);
    }

    printArray(arr){
        if(arr instanceof Array){
            for(let i of arr){
                if((i instanceof Array)|| (i instanceof Object)){
                    this.printArray(i)
                }
                console.log(i);
            }
        }
        else if(arr instanceof Object){
            for(let i in arr){
                 if((arr[i] instanceof Array)|| (arr[i] instanceof Object)){
                    this.printArray(arr[i])
                }
                console.log(arr[i]);   
            }
        }
        return ;
    }

     getCompartmentDetails(compartmentNumber){
        compartmentNumber--;
        return this.train.getCompartmentDetails(compartmentNumber);
    }


}


const main  = new Main("1","chennai","delhi");

main.initializeCompartments(2);
console.log(main.getTrainDetails());
// console.log(main.getCompartmentDetails(1));