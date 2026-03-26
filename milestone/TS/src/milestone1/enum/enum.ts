enum Direction{
    UP, //0
    LEFT, //1
    RIGHT,//2
    DOWN = 200,//3
}

 function enumFunction():void{
       let enumDirection:Direction = Direction.UP;
        let enumValue:Direction = Direction.DOWN;
       console.log("enumValue:",enumValue);
       console.log("enumDirection:",enumDirection);
       console.log("it also supports reverse mapping by Direction[0]",Direction[0]);
}

export default enumFunction;