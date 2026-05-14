import {Request,Response,NextFunction} from "express";
import  {getBook,createBook} from "./book-serveices";


//! controllers method
 
//? get all books data 
//* next function holo error janno
export const getAllBooks = async (req:Request , res:Response,next:NextFunction)=>{
 try {
    //? getBook() -> function book-services thaka import 
    const books = await getBook();
    res.status(200).json(books)
    
 } catch (error) {
    next(error)
 }
}


//? create new book 
export const postBook = async (req:Request , res:Response, next:NextFunction) =>{
     try {
        const newBook = req.body 
        const result = await createBook(newBook)
        res.status(200).json(result)
     } catch (error) {
        next(error)
     }
}