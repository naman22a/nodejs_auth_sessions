import { Request, Response } from "express";

export const isAuth = (req: Request, res: Response, next: Function) => {
    if (req.session.isAuth) {
        next()
    } else {
        res.redirect('/login');
    }
}