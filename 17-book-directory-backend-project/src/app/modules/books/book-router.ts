//! express is router 

import express from 'express' ;
import {getAllBooks,postBook,getSingleBook,updateBook} from './book-controllers';

const router = express.Router();

//? create new book
 router.post("/", postBook)

//? get all book 
router.get("/", getAllBooks)

//? get single book by id 
router.get("/:id", getSingleBook)

//? put single update by id 
router.put("/:id",updateBook)



export default router ;