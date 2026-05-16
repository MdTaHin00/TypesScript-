import {Schema,model} from "mongoose" 
import {UserInterface} from "./user-interface"
import {Role} from "./user-interface"

const userSchema = new Schema <UserInterface>({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true        
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    role:{
        type:String,
        enum:Object.values(Role),
        default:Role.USER
    }
},
{
    timestamps:true
}
)

export const User = model <UserInterface> ("User",userSchema)