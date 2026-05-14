//! book model for mongoose model

import {model,Schema} from "mongoose";

import  {BookInterface} from "./book-interface";

const bookModel = new Schema <BookInterface>({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true
    },
    genre:{
        type:String,
        required:true,
        trim:true
    },
    publicationYear:{
        type:Number,
        required:true
    },
    isbn:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    isAvailable:Boolean

},{
    //! create and update time mongoBD data base make kola 
  timestamps:true
}
)

 export const Book = model <BookInterface>("Book-directory",bookModel)
