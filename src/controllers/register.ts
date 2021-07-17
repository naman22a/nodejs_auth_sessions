import { Request, Response } from "express";
import User from '../models/User';
import bcrypt from 'bcrypt';

export const getRegister = (req: Request, res: Response) => {
    res.render('register', {
        name: 'Register'
    });
}

export const postRegister = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
        res.redirect('/register');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser = new User({
        username,
        email,
        password: hashedPassword
    });

    await newUser.save();

    res.redirect('/login');
}