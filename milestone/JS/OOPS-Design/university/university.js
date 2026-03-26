import { Block } from "./blocks.js";
import { Department } from "./department.js";

export default class University{
    constructor(name, address){
        this.name = name;
        this.address = address;
        this.blocks = [];
        this.departments = [];
    }

    createBlocks(blockName, noOfFloors, department){
            this.blocks.push(new Block(blockName, noOfFloors, department));
        
    }

    createDepartMent(name,maxStudentCount){
            this.departments.push(new Department(name,maxStudentCount));
    }

    getUniversityInfo(){
        return{
            name: this.name,
            address: this.address,
            blocks: this.blocks,
            departments: this.departments
        }
    }



}