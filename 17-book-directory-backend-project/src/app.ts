import express from 'express' ;
import cors from 'cors' ;
import bookRoute from './app/modules/books/book-router';
import userRoute from './app/modules/auth/user-routes'
import {errorHandel} from './app/middleware/errorHandler';
const app = express() ;



// !middleware 
app.use(express.json()) ;
app.use(cors()) ;


//! routes
//* book route 
app.use("/api/books",bookRoute)
//* user route
app.use("/api/users", userRoute)


//! error 
app.use(errorHandel)

app.get('/',(req,res) =>{
    res.send("Book Directory server is running..!")
})

export default app ;


//mdtahinhassanjihad_db_user
// Rjq2zZgMYV87Oatb