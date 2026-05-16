import {User} from './user-model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {config} from '../../config' ;

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

export const LoggedInUser = async (email:string , password:string )=>{
   const user = await User.findOne({email}) ;
   if(!user) {
    console.log('Invalid email or password');
   }

   //? verify password bcrypt
   //* compare -> register hash password ka match korva 
   const isPasswordValid = await bcrypt.compare(password,user?.password)
   if(!isPasswordValid){
    console.log("Invalid password");
    return ;
   }

 //? create token method 
 const token = jwt.sign({
  userId: user?._id ,
  role : user?.role 
}, config.jwt_secret as string , 
{ expiresIn: '1h' });

return {
    user,token
}

}
