      //!  interface and alias use wey

//? 1. designing public APIs : interface
//? 2. for simple object : use both ja kono akta
//? 3. union and intersection types: use type
//? 4. primitive or functions : use type
//? 5. flexibility : interface(extends) 


//!  alias type 
type User = {
    name: string,
    age: number,
    email: string
}


//!  define interface type
//* interface data merge kola jay / data jok kola jay
interface UserProfile {
    name: string,
    age: number,
    email: string
}

//? marge object 
interface Person{
    name:string
}
interface Person{
    age:number
}

//! extends

interface Animal {
    name: string
}

interface Dog extends Animal{
    breed: string
}

const myDog: Dog = {
    name:"Tomey",
    breed:"red"
}
