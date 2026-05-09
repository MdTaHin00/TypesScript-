import { NextFunction, Response, Request } from 'express'

export interface AppError extends Error {
    status?: number
}

export const errorHandel = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal server Error'
    })

}