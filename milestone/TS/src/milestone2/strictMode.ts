export default function strictMode(){
    // if strict is  set to false in tsconfig there are some behaviour changes happens

    /**
     *  function add(a,b){
     *  return a+b
     * }
     * 
     * by default the arguments of add are set to any
     * 
     */

    /**
     * Null checks will not work
     * 
     * let a:string = null; 
     * normally this would give error, with strict:false this will work
     */


    /**
     * function test(){
     * console.log(this)
     * }
     * 
     * // here the this's type is unknown, in strict mode it gives error
     */

    
}