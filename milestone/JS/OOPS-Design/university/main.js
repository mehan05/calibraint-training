import University from "./university.js";

export class Main{

    University;

    constructor(){
        this.University = new University("ABC Institute of technology", "XYZ");

    }

    getAllUniversityData(){
        return this.University.getUniversityInfo();
    }

    findBlock(blockName){
        for(let i=0;i<this.University.blocks.length;i++){
            if(this.University.blocks[i].blockName == blockName){
                return i;
            }
        }
    }

    findDepartment(departmentName){
        for(let i=0;i<this.University.departments.length;i++){
            if(this.University.departments[i].name == departmentName){
                return i;
            }
        }
    }

    createBlocks(blockName, noOfFloors, department){
        this.University.createBlocks(blockName, noOfFloors, department);   
    }

    createFloors(blockname, noOfFloors){
        let blockId = this.findBlock(blockname);
        this.University.blocks[blockId].createFloors(noOfFloors);
    }

    
    createSections(floorId, blockname, noOfSections){
        let blockId = this.findBlock(blockname);
        floorId-=1;
        this.University.blocks[blockId].floors[floorId].addSections(noOfSections);   
    }

    createDepartment(name,maxStudentCount){
        this.University.createDepartMent(name,maxStudentCount);
    }

    addStudents( departmentName,...students){
        let departmentId = this.findDepartment(departmentName);
        this.University.departments[departmentId].addStudents(...students);
    }
}

let main  = new Main();
main.createBlocks("Block1", 5, "CSE");
main.createBlocks("Block2", 5, "ECE");
main.createBlocks("Block3", 5, "EEE");


main.createFloors("Block1", 5);
main.createFloors("Block2", 5);
main.createFloors("Block3", 5);


main.createSections(1, "Block1", 5);
main.createSections(2, "Block1", 5);
main.createSections(3, "Block1", 5);
main.createSections(4, "Block1", 5);
main.createSections(5, "Block1", 5);

main.createSections(1, "Block2", 5);
main.createSections(2, "Block2", 5);
main.createSections(3, "Block2", 5);
main.createSections(4, "Block2", 5);
main.createSections(5, "Block2", 5);


main.createSections(1, "Block3", 5);
main.createSections(2, "Block3", 5);
main.createSections(3, "Block3", 5);
main.createSections(4, "Block3", 5);
main.createSections(5, "Block3", 5);

main.createDepartment("CSE", 100);
main.createDepartment("ECE", 100);
main.createDepartment("EEE", 100);

main.addStudents("CSE",
    { name: "mehan", dob: "01-01-2000", department: "CSE" },
    { name: "mehan1", dob: "01-01-2000", department: "CSE" },
    { name: "mehan2", dob: "01-01-2000", department: "CSE" },
    { name: "mehan3", dob: "01-01-2000", department: "CSE" },
)

main.addStudents("ECE",
    { name: "test1", dob: "01-01-2000", department: "ECE" },
    { name: "test2", dob: "01-01-2000", department: "ECE" },
    { name: "test3", dob: "01-01-2000", department: "ECE" },
    { name: "test4", dob: "01-01-2000", department: "ECE" },
)

main.addStudents("EEE",
    {name:"mark1", dob:"01-01-2000", department:"EEE"},
    {name:"mark2", dob:"01-01-2000", department:"EEE"},
    {name:"mark3", dob:"01-01-2000", department:"EEE"},
    {name:"mark4", dob:"01-01-2000", department:"EEE"},
)

console.log(main.getAllUniversityData());