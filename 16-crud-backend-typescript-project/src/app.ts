//! typescript express use npm 
//* npm i --save-dev @types/express
//? typescript method tai import
import express, { type Request, type Response } from 'express' ;

const app = express() ;

//! routes folder itemRoute file import
import itemRouter from './routes/itemRoute'

//? middleware
app.use(express.json()) 


//? routes
app.use('/api/item', itemRouter)

app.get("/",(req:Request, res:Response) => {
    res.send("Backend Server is running..")
})

export default app ;