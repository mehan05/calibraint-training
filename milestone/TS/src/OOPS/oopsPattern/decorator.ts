/**
 * Decorator pattern na oru object-ku extra behavior add panna, new subclass create pannaama runtime-la wrapper madhiri layer-aa add pannura design pattern.

Simple-aa sonna, original object-a wrap panni athuku mela new features add pannalam without modifying the original class.
 */


interface Coffee{
    getCost():number;
    getDescription():string;
}

class PlainCoffee implements Coffee{
    getCost(): number {
        return 100;
    }

    getDescription(): string {
        return "Plain Coffee"
    }
}  

abstract class CofeeDecorator implements Coffee{
    protected plainCofee:Coffee
    constructor(coffee:Coffee){
        this.plainCofee = coffee
    }

    getCost(): number {
        return this.plainCofee.getCost();
    }

    getDescription(): string {
        return this.plainCofee.getDescription()
    }
} 


class MilkDecorator extends CofeeDecorator{
    constructor(milkCoffee:Coffee){
        super(milkCoffee)
    }

    getCost(): number {
        return this.plainCofee.getCost() +20;
    }

    getDescription(): string {
        return this.plainCofee.getDescription() + "With milk"
    }


}

class SugarDecorator extends CofeeDecorator{
    constructor(sugar:Coffee){
        super(sugar)
    }

    getCost(): number {
        return this.getCost() + 10;
    }

    getDescription(): string {
        return this.plainCofee.getDescription() + "with sugar"
    }
}


let myCoffee = new PlainCoffee();

myCoffee = new MilkDecorator(myCoffee);

myCoffee = new SugarDecorator(myCoffee);


console.log("Price:",myCoffee.getCost());
console.log("Description",myCoffee.getDescription());

