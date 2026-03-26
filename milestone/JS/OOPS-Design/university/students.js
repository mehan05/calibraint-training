import { Semester } from "./semester.js";

export class Student{
    static studentCount = 0;
    constructor(name, dob, department){
        this.name = name;
        this.dob = dob;
        this.rollNo = Student.studentCount++;
        this.department = department;
        this.currentSemester = 1;
        this.totalSemesters = 8;
        this.semesters = [];
    
        for(let i=0;i<this.totalSemesters;i++){
            this.semesters.push(new Semester(`Semester ${i+1}`, "2026-2030",))
        }
    
    }

    



}