class TsTest{
    name:string
    constructor(name:string){
        this.name = name
    }

    getName(){
        return this.name
    }
}

let test = new TsTest("mehan");
console.log(test.getName());