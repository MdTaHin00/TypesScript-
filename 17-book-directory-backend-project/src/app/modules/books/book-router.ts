//! express is router 

import express from 'express' ;
import {getAllBooks,postBook} from './book-controllers';

const router = express.Router();

//? create new book
 router.post("/",postBook)

//? get all book 
router.get("/",getAllBooks)


export default router ;