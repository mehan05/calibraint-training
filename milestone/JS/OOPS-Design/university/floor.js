export class Floor{
    constructor(floorNo, block, department){
        this.floorNo = floorNo;
        this.block = block;
        this.department = department;
        this.sections = [];
    }

    addSections(noOfSections){
        if(noOfSections>2){
            return "Floor cannot have more than 2 sections";
        }
        for(let i=0; i<noOfSections; i++){
            this.sections.push(new Section(`S-${i}`, this.floorNo, this.block, this.department));
        }
    }
}