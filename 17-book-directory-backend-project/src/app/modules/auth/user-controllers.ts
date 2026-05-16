import {Request,Response,NextFunction} from "express";
import {registerNewUser} from "./user-services";

export const registerUser = async(req:Request,res:Response , next:NextFunction)=>{
  try {
    const{username,email,password} = req.body ;

    if(!username || !email || !password){
        res.status(400).json({message:"All fields are required"})
    }
    const user = await registerNewUser(username,email,password)
   
    res.status(200).json({message:"User Registered successfully",
        //* public show data 
         user:{
        _id:user._id,
        username:user.username,
        email:user.email
    }})
  } catch (error) {
    next(error)
  }
}