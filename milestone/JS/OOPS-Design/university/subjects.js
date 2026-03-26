export class Subject{
    static subjectCounter = 0
    constructor(name,marks){
        this.name = name;
        this.marks = marks;
        this.code = Subject.subjectCounter++;
    }
}