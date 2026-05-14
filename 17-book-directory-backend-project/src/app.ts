import express from 'express' ;
import cors from 'cors' ;
import bookRoute from './app/modules/books/book-router';
const app = express() ;



// !middleware 
app.use(express.json()) ;
app.use(cors()) ;


//! routes
app.use("/api/books",bookRoute)


app.get('/',(req,res) =>{
    res.send("Book Directory server is running..!")
})

export default app ;


//mdtahinhassanjihad_db_user
// Rjq2zZgMYV87Oatb