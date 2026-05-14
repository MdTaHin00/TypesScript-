import {Document} from "mongoose";

//! type definition  book ar
//? Document -> mongoose ar database a Id make kola day 

export  interface BookInterface extends Document {
    title:string ,
    author:string,
    description:string,
    genre:string,
    publicationYear:number,
    isbn:string,
    price:number,
    isAvailable:boolean,
    createdAt:Date,
    updatedAt:Date,
 }