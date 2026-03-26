export default function functionReturnType(a:number) {
     if(a==1){
        return a*a;
     }
     else{
        return "hello"
     }
}
/**
 * here internally ts automatically, assigns the function return type as number | string
 */

function arrayInReturnType(a:number): number[] | string[]{
        if(a==1){
            return [1]
        }
        else{
            return ["string"]
        }
}
// for array return type we can also use Array<number>, Array<string>,
// if a function returns use interface or objects directly in return type with correct property names



function testFunction():void{
    return ;
}

/**
 * 
 * . TypeScript extends this list with a few more, such as any (allow anything), unknown (ensure someone using this type declares what the type is), never (it’s not possible that this type could happen), and void (a function which returns undefined or has no return value).
 * 
 */
