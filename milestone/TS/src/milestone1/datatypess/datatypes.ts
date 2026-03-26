function dataTypes():void{

    let a:number = 10;
    let b:number = -1;
    let c:number = 3.4;

    let boolen:boolean = true;
    let str:String = "hello";
    let sym:symbol = Symbol(1);
    let n:null = null;
    let un:undefined = undefined;

    // console.log("decimal",a);
    // console.log("negative",b);
    // console.log("float",c);

    // console.log("boolean",boolen);
    // console.log("string",str);
    // console.log("symbol",sym);
    // console.log("null",n);
    // console.log("undeifined",un);

    // tuples
    // tuple means, fixed length and fixed position of elements
    // but we can change values, 
    let arr:[number,string]  = [1,"hello"];
    arr[0] = 10;
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[1]);


    // objects
    let obj:{name:string,age?:number, readonly place:string} = {
        name:"mehan",
        place:"india"
    };

    console.log(obj);
    console.log(obj.name);
    console.log(obj.age);


    // any (allows anything)
    // unknown (ensure someone using this type declares what the type is)
    // never (this type is never exist)
    // void(a function which returns undefined or has no return value))
}

export default dataTypes;