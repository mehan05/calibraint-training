interface IndexedObj {
  [key: string]: string; // this means any property with string key, must have string value
}

//twisted examples
interface IndexedObj1 {
  [key: number]: number;
  age: number; // internally it treats age as "age"
} // this will not give error, because internally  it converts numbers in to string , if u pass 1 internally it stored as "1" so we can pass age

// indexed signatures are used to define types for key adn value for, object's type,
export default function indexedSignatures() {
  
  const obj1: IndexedObj = {
    name: "mehan",
    age: "20",
  };

  let obj2: IndexedObj1 = {
    1: 1, // if i pass "1" it will show error
    age: 20,
  };

  console.log(obj1);
  console.log(obj2);
}
