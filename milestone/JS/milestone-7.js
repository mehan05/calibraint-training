// garbage collection is a process that js garbage collector free up the memory automatically, if a object , variable, dont use it,
// simply if it is not accessiable garbage collector will remove it
function test() {
  let a;
  a = { name: "mehan" };
  return a;
}

test();
// the refrence of a is removed after function call and it will be collected by garbage collector

function mapObj(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman,
  };
}

let woman = { name: "alice" };
let man = { name: "john" };
let family = mapObj(man, woman);

// delete family.father;
// delete family.mother.husband
// the above delete staements remove the link of man from main fammily object as well as from the woman,that  husband's interlinked object

console.log(family);

//performance

//1 Minimize object creation

//it is creating new object every iteration
for (let i = 0; i < 1000; i++) {
  let obj = { name: "mehan" };
  obj.count = i;
}

//keep the object creation outside of loop, so we are reusing the existing object
let obj = { name: "mehan" };
for (let i = 0; i < 1000; i++) {
  obj.count = i;
}

//2 Manage object lifetimes
let obj1;
function process() {
  obj1: {
    data: new Array(100).fill(0);
  }
}
process();
//here even the after the function ends the obj1 is still present in the memory

function process() {
  let obj11 = { data: new Array(100).fill(0) };
}
process();
// here obj11 is removed from the memory after function ends

//3  only keep a variable i global if it is necessary , if not keep inside function locally

//4 use effieient data structures
function Node(value) {
  this.value = value;
  this.next = null;
}

let node1 = Node(10);
let node2 = Node(20);
// here multiple small objects are created, its not effienent and every object has a extra next property, but in array only one object is created 
// it is easy to traverse because array is contigious memory

let arr12 = [];
function Node2(value) {
  arr12.push(value);
}

node2({ name: "mehan", age: 20 });
node2({ name: "mehan", age: 20 });
node2({ name: "mehan", age: 20 });
// here one arr is created only on e reference so its efficient

//5 avoid accidental gblobal variables
function test12(){
  x = 10;
}
console.log(x); // here the x is lives in the global scope so after the function call also it lives, which is consuming more memory

//6 remove event listenrrs
let ele = document.getElementById("button");
ele.addEventListener("click",()=>{
  console.log("button clicked");
})

ele.remove(); // you should think ele is removed so all the event listeners are also removed, but its not true
// the event listening  system is pointing to =>     event system -> listener function ->  event handler function
// so to remove it u need to manually remove it

ele.removeEventListener("click",()=>{console.log("button clicked")});



