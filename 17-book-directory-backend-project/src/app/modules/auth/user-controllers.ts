import {Request,Response,NextFunction} from "express";
import {registerNewUser,LoggedInUser} from "./user-services";

export const registerUser = async(req:Request,res:Response , next:NextFunction)=>{
  try {
    const{username,email,password} = req.body ;

    if(!username || !email || !password){
        res.status(400).json({message:"All fields are required"}) ;
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

export const loginUser =async (req:Request,res:Response , next:NextFunction)=>{
 try {
    const{email,password} = req.body ;

    if(!email || !password){
        res.status(400).json({message:"Email and Password are required"})
    }

    //* {user,token} -> dexer const return thaka
    const {user,token} = await LoggedInUser(email,password) ;

    res.status(200).json({message:"User Login successfully", user:{
        _id:user?._id ,
        username:user?.username ,
        email:user?.email ,
        role:user?.role
    },
    token:token 
})

 } catch (error) {
  next(error)  
 }
}