
//! general function 
//* name : string -> name string hova ta call 
//* (): string -> function return value asva tai string
function great (name : string) : string {
    return `hello : ${name}`
}
console.log(great("Jihad"));


//! signature types function 
let greetFunction:(name:string) => string 
greetFunction = function(name:string) : string{
    return `hi, ${name}`
}
console.log(greetFunction("tahin"));


//! optional and default parameters
//* title ?:  -> optional parameters
//* hossain -> lastName ar default value
function isStart (firstName : string , lastName : string ="hossain",title ?: string) : string {
    return `hello ${firstName} - ${lastName} ! ${title ? title : "N/A"}` 
}
console.log(isStart("md","jihad"));
console.log(isStart("tahin","hossain","students"));



       //! return types method
//* (): number -> ai function number value asva        
function math(a:number, b:number) : number{
    return a + b ;
}  
console.log(math(20,14));

//* void -> return value jokan na thkava 
function math2 ( a:number , b:number) : void {
    console.log(a * b);
}
math2(20,10) ;


   //! arrow function 
const add = (e:number , j:number)  : number =>{
     return e + j
}  
console.log( 20 , 8);
 