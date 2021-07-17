import { Request, Response } from "express";
import User from '../models/User';
import bcrypt from 'bcrypt';


export const getLogin = (req: Request, res: Response) => {
    res.render('login', {
        name: 'Login'
    });
}

export const postLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // user exsits
    const user = await User.findOne({ email });

    if (!user) {
        return res.redirect('/login')
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.redirect('/login')
    }

    req.session.isAuth = true;

    res.redirect('/dashboard')
}