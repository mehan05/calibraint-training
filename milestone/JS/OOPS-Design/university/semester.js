import { Subject } from "./subjects.js";

export class Semester{
    constructor(name, regulation){
        this.name = name;
        this.regulation = regulation;
        this.subjects = [];
        this.isActive = false;
        
        for(let i=0;i<5;i++){
            this.subjects.push(new Subject(`Subject ${i+1}`, 100));
        }

    }





}