
export type User ={
    id : number ,
    name : string ,
    email : string
}

//! response value type default
export type ApiResponse <T> = {
    data:T,
    status : number ,
    message: string
}