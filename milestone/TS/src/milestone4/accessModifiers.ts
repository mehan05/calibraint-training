// access modifiers control the visobility of class members
// public => accessible from anywhere
// private => accessible only inside the class, that member defined
// protected => accessible only inside the class and its child classes


// public
class PublicClass{
    // public name:string;
    // constructor(name:string){
    //     this.name = name;
    // }

    constructor(public name:string){ // this is a shorthand method, varaible declaration and, access modifier applying happenning in constructor argument itself
        this.name = name
    }

    getName(){
        console.log(this.name);
    }
}
let publicClass = new PublicClass("mehan");
console.log(publicClass.name);


// private
class PrivateClass{
    private name:string;
    constructor(name:string){
        this.name = name
    }

    getName(){
        console.log(this.name);
    }
}
let privateClass = new PrivateClass("mehan");
// console.log(privateClass.name); // gives error



// protected
class ProtectedClass{
    protected name:string;
    constructor(name:string){
        this.name  = name;
    }

    getName(){
        console.log(this.name);
    }
}

class ChildForProtected extends ProtectedClass{
    constructor(name:string){
        super(name)
    }

    getName(){
        console.log(this.name);
    }
}

let child = new ChildForProtected("mehan");
console.log(child.getName());

