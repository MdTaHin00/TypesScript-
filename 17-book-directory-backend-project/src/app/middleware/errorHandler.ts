import {Request,Response,NextFunction} from 'express'

interface AppError extends Error{
    statusCode?:number ,
    status?:string,
    isOperational?:boolean
}

const errorHandel =(err:AppError , req:Request, res:Response, next: NextFunction)=>{

    err.statusCode = err.statusCode || 500 ;
    err.status = err.status || 'error' ;

    res.status(err.statusCode).json({
        status:err.stack,
        message:err.message ,
        err:err,
        stack:err.stack
    })

}
export default errorHandel ;
