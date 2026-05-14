import { Request, Response, NextFunction } from "express";
import { getBook, createBook , updateBookById} from "./book-serveices";
import { Book } from "./book-model"

//! controllers method

//? get all books data 
//* next function holo error janno
export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
   try {
      //? getBook() -> function book-services thaka import 
      const books = await getBook();
      res.status(200).json(books)

   } catch (error) {
      next(error)
   }
}


//? create new book 
export const postBook = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const newBook = req.body
      const result = await createBook(newBook)
      res.status(200).json(result)
   } catch (error) {
      next(error)
   }
}

//? single book show by id 
export const getSingleBook = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const { id } = req.params;
      const book = await Book.findById
         (id);
      if (!book) {
         res.status(404).json({ message: "Book not found" })
         return
      }
      res.status(200).json(book)
   } catch (error) {
      next(error)
   }
}

//? update book by id 
export const updateBook = async (req:Request , res:Response, next:NextFunction) =>{
   try {
      const bookId = req.params.id ;
      const bookData = req.body ;

      //* updateBookById -> book-services thaka import function
      const updateBook = await updateBookById(bookId,bookData)

      if(!updateBook){
         res.status(404).json({message:"Book can't to update"})
      }

      res.status(200).json({message:"Book Update Successfully", updateBook})
   } catch (error) {
    next(error)  
   }
}


//? delete book by id 
export const deleteBook = async(req:Request,res:Response,next:NextFunction) =>{
   try {
      const id = req.params.id ;
      const result = await Book.findByIdAndDelete(id) ;
      if(!result){
         res.status(404).json({message:"Book not found"})
      }
      res.status(200).json({message:"Book deleted Successfully", result})
   } catch (error) {
      next(error)
   }
}