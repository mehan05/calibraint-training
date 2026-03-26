const Promise = require("bluebird");

// let arr =[1,2,Promise.reject(3), 4,5];
// Promise.map(arr,data=> {
//     Promise.delay(1000)
//     .then(()=> console.log(data))
// }, {concurrency:2}) //// with this concurrency it will run only 2 promises for 1000ms
// .catch(err=> console.log("err"))


// let obj={
//     status1: Promise.resolve(10),
//     status2:(async function(){
//         await Promise.delay(5000)
//             return Promise.resolve(5)
//     })(),
//     status3: Promise.resolve(20),
//     status4: Promise.resolve(30)
// };

// Promise.props(obj)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))


// function trys(arg){
//         setTimeout(()=>{
//             console.log("timeout")
//         },2000)
//         if(arg!=null ||  arg!=undefined)
//         return "hello from trys";
//         else throw "error from trys"
        

// }

// Promise.try(()=>trys(12))
// .then(data=> console.log(data))
// .catch(err=>console.log(err))



// function test(id){
//     if(!id){
//         throw "Invalid Id"
//     }
//     return id
// }

// const testMethod = Promise.method(test)
// testMethod(12)
// .then(data=> console.log(data))
// .catch(err=> console.log(err))


// let arrReduce = [1,2,3,4,5];

// Promise.reduce(arrReduce, async(acc,data)=>{
//     await Promise.delay(1000);
//     return acc+data
// })
// .then(data=> console.log(data))
// .catch(err=> console.log(err))


// let arrFilter = [1,2,3,4,5];
// Promise.filter(arrFilter, async(data)=>{
//     await Promise.delay(1000);
//     return data%2==0
// })
// .then(data=> console.log(data))
// .catch(err=> console.log(err))

// let date = new Date(2026, 2, 16, 16, 45, 30, 0); // here months are 0 based indexed
// // console.log(date);

// let date4 = new Date();
// console.log(date4.toString()); 
// console.log(date4.toDateString())
// console.log(date4.toLocaleString("en-IN",{timeZone:"Asia/Kolkata"}));
// console.log(new Date("2026-02-16")==new Date("2026-02-16T00:00:00"));
// console.log(new Date("2026-02-16")< new Date("2026-02-17"));
// let a = new Date("2026-02-16"); // it gives time in UTC
// let b = new Date(2026,2,17); // it gives time in IST
// console.log(a.getTime()==b.getTime());


function thisCall(){
    console.log(this.name, this.age)
}

let obj = {
    name:"mehan",
    age:123
}

thisCall.call(obj);



function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function () {
    console.log(`${this.name} makes a sound.`);
};

// Child constructor function
function Dog(name) {
    Animal.call(this, name); // Inherit properties
}

// Inherit methods from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a new method to Dog
Dog.prototype.bark = function () {
    console.log(`${this.name} barks: Woof!`);
};

// Creating an instance
const myDog = new Dog("Buddy");

myDog.speak(); 
myDog.bark();