//! typescript express use npm 
//* npm i --save-dev @types/express

//? typescript method tai import

import express, { type Request, type Response } from 'express' ;

const app = express() ;

//? middleware
app.use(express.json()) 


//? routes

app.get("/",(req:Request, res:Response) => {
    res.send("Backend Server running..")
})

export default app ;