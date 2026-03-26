// literal types means, specifhy the actual value as type for a variable

type num = 10;

let a:num = 10;
// let b:num = 11; // error because , the type og b is the actual value 42, 11 is not acceptable

// template literal 
type tempLiteral = `Mr.${string}`; // inside the {} any string can come
let s:tempLiteral = "Mr.smith"
// let s1:tempLiteral = "Mrs.smith" // error,  string not matched
