export default function typeAnnotations():void{
    // manually specify the type of a variable
    let a:number = 10;
    
    // how let a:number = 10 works
    /**
     *  
     * 1) parse the code: convert the code into AST tree
     * 2) store the type in symbol table a -> number
     * 3) check assigned value type, if it is not same as the type in symbol table, raise error
     * 
     */

    
    // how this works for this case
    let b:number;
    b =10;

    /**
     * 1) eventhough b  not have value, it created AST and store as symbol table b -> number , no memory is allocated at compile time
     * 2) when we assign value to b, it checks the type of value,     * 
     * 
     */

    
    let c;
    c =10;
    c = "strig";
    console.log(c);
    /**
     * 1) here c's type is set to any by default
     * 2) when we assign value to c, it will allow any typw
     * 
     */


    // assigning values using typeof
    let d:number = 123;
    let e: typeof d; 
    e = 100;
    console.log(e);



}