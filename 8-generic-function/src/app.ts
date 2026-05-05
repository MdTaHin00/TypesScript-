//! generic function use

//? <> -> tag ar moda code holo generic function ar value
//* T -> ani text 
function logData<T>(data: T) {
    console.log(data);
}
//* generic function ar function call 
logData<string>("Hello");
logData<number>(202);
logData<boolean>(false)

//!  generic interface 
interface ApiResponse<T> {
    success: boolean,
    data: T
}
//?* ApiResponse ar data T ka userResponse const a Object hoy nece 
//* {<name>} -> object kola ApiResponse data naya and name string value hova
const userResponse: ApiResponse<{ name: string }> = {
    success: true, data: { name: "Alice" }
}
const numberResponse: ApiResponse<number> = {
    success: true, data: 120
}


  //! basic generic function 
function   genericData<T>(data: T){
    console.log(data);
}
//* type name na dela problem nai
genericData<string>("hello world");
genericData(30);
genericData(true)
genericData<string[]>(['abe','ff','dff'])
genericData({name:"jihad",age:21})  


   //! constraints generic
   //? extends use

//? function data moda kota length kota ta check
function printLength <T extends {length: number}> (item: T){
    console.log("Check Length" , item.length);
}
printLength('hello world')
printLength([1,2,3,4,5,6,7])

//? id check 
interface Hasid {
    id:number
}
//* extends ->  kola Hasid add korce ai function a 
//* return number korce tai -> :number
function getId <T extends Hasid> (item: T) : number{
    return item.id ;
}
//* getId mastbe id deta hova
const result = getId({id:1234,name:"alice"})
console.log("This is result ",result);
