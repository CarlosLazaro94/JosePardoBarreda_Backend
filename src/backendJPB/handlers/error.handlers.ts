import { Request, Response, NextFunction } from "express";
import Responses from "../utils/reponses.util";


export interface IError extends Error {
    status?: number;
}

export default class ErrorHandler {

    static catchAsync(ftn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
        return (req: Request, res: Response, next: NextFunction) => {
            return ftn(req, res, next).catch(error => {
                Responses.send(res, 500, error);
            });
        };
    };

    static NotFound(req: Request, res: Response, next: NextFunction) {
        const error: IError = new Error("Router no found");
        error.status = 404;
        next(error)
    }

    static general(
        error: IError,
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (process.env.NODE_ENV != 'development') {

           delete error.stack
            /*res.status(error.status).json({
                status: error.status,
                message: error.message,
                stack: error.stack
            });*/
        } 
        Responses.send(res, error.status, error)
    }
}