//! database connection code 

import  {BookInterface} from "./book-interface"
import {Book} from "./book-model"

//? get all data 
export const getBook = async ()=>{
    
    const result = await Book.find();
    return result ;
}

//? create new book
export const createBook = async(data:BookInterface) => {
  const result = await Book.create(data) ;
  return result ;
}