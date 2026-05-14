import express from 'express' ;
import cors from 'cors' ;
const app = express() ;


// !middleware 
app.use(express.json()) ;
app.use(cors()) ;


app.get('/',(req,res) =>{
    res.send("Book Directory server is running..!")
})
export default app ;


//mdtahinhassanjihad_db_user
// Rjq2zZgMYV87Oatb