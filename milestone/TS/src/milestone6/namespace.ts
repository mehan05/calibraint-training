// it is used to, group related code into one module, to avoid conflict with other names in other files
//Organize code and prevent global naming collisions


namespace greet{
   export  function greet1(){
        console.log("hello1")
    }
}

function greet2(){
    console.log("greet2")
}


greet.greet1();
greet2();

