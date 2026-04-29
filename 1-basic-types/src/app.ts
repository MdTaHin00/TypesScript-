
//! primitive data types

//? string
let studentName:string = "jihad" ;

studentName = "nova";

//? number 
let age:number = 21;

//? boolean
let isPassed: boolean = true ;

//? array 

let scores: number[] =[49,58,74] ;
console.log(scores[1]);

//* string array
let name: string[] = ['tahin','jihad','tamim'];
console.log(name);

//* array and tuples
let student:[string,number,boolean] = ['alice',21,true];
console.log(student);


//? unknown type 
//* unknown jar type vola thaka na
let value: unknown = "Word" ;
if(typeof value === "string"){
    console.log(value.toUpperCase())
}

//? void 
//* ja function ar return value as na tokun use hoy
function message() : void{
    console.log("Logged");
}

//* return value asva thokan ai method
function greeting (name:string) : string {
    return `Hello ${name}`
}
console.log(greeting("Jihad"));
