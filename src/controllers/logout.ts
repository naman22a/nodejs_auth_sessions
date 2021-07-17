import { Request, Response } from "express";

export const postLogout = (req: Request, res: Response) => {
    req.session.destroy((error) => {
        if (error) throw error;
        res.redirect('/');
    });
}