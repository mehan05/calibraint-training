export default function optionalParameters(name?:string){
    // console.log(name.length); // gives error in strict mode 
    // here ? internally means name: string | undefined 

    // if u use ? , check that value is not undefined manually using if condition to avoid errors
    if(name){
        console.log(name.length);
    }
    
}