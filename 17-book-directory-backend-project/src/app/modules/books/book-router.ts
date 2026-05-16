//! express is router 

import express from 'express' ;
import {getAllBooks,postBook,getSingleBook,updateBook,deleteBook} from './book-controllers';

import {tokenVerify} from '../../middleware/token-verify-middleware'
import {adminToken} from '../../middleware/token-verify-middleware';

const router = express.Router();

//? create new book and admin
 router.post("/" , tokenVerify ,adminToken ,postBook)

//? get all book 
router.get("/", tokenVerify , getAllBooks)

//? get single book by id 
router.get("/:id", tokenVerify ,adminToken, getSingleBook)

//? put method book update by id and admin
router.put("/:id", tokenVerify ,adminToken,updateBook)

//? delete single book by id  and admin 
router.delete("/:id", tokenVerify ,adminToken,deleteBook)



export default router ;