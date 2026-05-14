//! book model for mongoose model

import {model,Schema} from "mongoose";

import  {BookInterface} from "./book-interface";

const bookModel = new Schema <BookInterface>({
    title:{
        type:String,
        require:true,
        trim:true
    },
    author:{
        type:String,
        require:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true
    },
    genre:{
        type:String,
        require:true,
        trim:true
    },
    publicationYear:{
        type:Number,
        require:true
    },
    isbn:{
        type:String,
        require:true,
        trim:true,
        unique:true
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    isAvailable:Boolean

},{
    //! create and update time mongoBD data base make kola 
  timestamps:true
}
)

 export const Book = model <BookInterface>("Book-directory",bookModel)
