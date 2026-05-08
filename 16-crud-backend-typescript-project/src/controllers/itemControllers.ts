import  {Request,Response,NextFunction} from "express"

import {items} from "../models/items"

//! create add item
//? next : -> error ar janno function
export const createItem =(req:Request,res:Response,next:NextFunction)=>{
try {
    const{name,description} = req.body ;

    const newItem = {
        id: Date.now(),
        name:name ,
        description:description
    }

    items.push(newItem)
    res.status(200).json(newItem)
} catch (error) {
    next(error)
}
}

//! add data show method
export const getItem = (req: Request, res: Response , next:NextFunction) => {
    try {
        res.json(items)
    } catch (error) {
       next(error)  
    }
}



//! single data show by id 
export const getItemById = (req:Request , res:Response , next:NextFunction) =>{
   try {
     const id = parseInt(req.params.id, 10) ;

     //! items -> models thaka import name
     const item = items.find((item) => item.id === id) 

     if(!item){
        res.status(404).json({message:"Item not found"})
        return ;
     }

     res.json(item)
     
   } catch (error) {
     next(error)
   }
}