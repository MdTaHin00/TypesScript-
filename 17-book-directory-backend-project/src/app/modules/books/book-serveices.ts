//! database connection code 

import { BookInterface } from "./book-interface"
import { Book } from "./book-model"

//? get all data 
export const getBook = async () => {
  const result = await Book.find();
  return result;
}

//? create new book
export const createBook = async (data: BookInterface) => {
  const result = await Book.create(data);
  return result;
}

//? update book 
export const updateBookById = async (id : string , data:BookInterface) =>{
  const result = await Book.findByIdAndUpdate(id,data,
     //* runValidators-> update run kolar janno default code
    {new:true, runValidators:true})
    return result
}