//! express is router 

import express from 'express' ;
import {getAllBooks,postBook,getSingleBook,updateBook,deleteBook} from './book-controllers';

const router = express.Router();

//? create new book
 router.post("/", postBook)

//? get all book 
router.get("/", getAllBooks)

//? get single book by id 
router.get("/:id", getSingleBook)

//? put method book update by id 
router.put("/:id",updateBook)

//? delete single book by id 
router.delete("/:id",deleteBook)



export default router ;