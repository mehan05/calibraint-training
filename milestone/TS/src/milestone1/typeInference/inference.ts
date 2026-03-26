export  default function  inference(){
    // inference means, eventhough the type is not spicified for a value  ts  derives the type of the value using the value itself
    // internally iy first reads the whole file create a abstract syntax tree, AST tree, and then derive the type of value from value

    let a = 10;
// variableDeclaration
    //   |
    // name:a
    // value:10

    // type inference on objects
    let obj = {
        a:10,
        b:"hello",
        c:true
    }
    /**
     * obj:{
     *  a:number,
     * b:string,
     * c:boolean
     * }
     */


    let arr = [1,2,3];
    /**
     *  number[]
     */

    let arrWithMixedTypes = [1,"hello",true];
    /**
     *  (string| number | boolean)[]
     */


    

}