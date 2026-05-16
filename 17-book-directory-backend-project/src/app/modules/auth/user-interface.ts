import {Document} from "mongoose";

export enum Role{
    USER="user",
    ADMIN="admin"
}

//? Document -> mongoose ar database a Id make kola day 
export interface UserInterface extends Document {
    username:string ,
    email:string,
    password:string,
    role:Role,
    createdAt:Date,
    updatedAt:Date
}