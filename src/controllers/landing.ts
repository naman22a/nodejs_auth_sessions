import { Request, Response } from "express";

export const getLanding = (req: Request, res: Response) => {
    res.render('landing', {
        name: 'Landing'
    });
}