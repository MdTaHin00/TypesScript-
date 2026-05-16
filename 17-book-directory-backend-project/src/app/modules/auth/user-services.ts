import {User} from './user-model'
import bcrypt from 'bcrypt'

export const registerNewUser = async(username:string,email:string,password:string)=>{
    //* $or -> mongoose code ja email,username aca ki na check kola
   const existingUser = await User.findOne({$or :[{email}, {username}]})
   if(existingUser){
    console.log("User with email or username already exists");
   }

   const hasedPassword = await bcrypt.hash(password,10)

   //* create new user 
   const user = new User({
    username:username ,
    email:email,
    password:hasedPassword 
   })

   await user.save() ;
   return user ;
}
