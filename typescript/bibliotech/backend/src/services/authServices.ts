import { Request, Response } from "express";
import UserDAO from "../dao/UserDAO";
import User from "../models/User";
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

async function authRegister(req:Request, res:Response): Promise<any>{
    const {username, email, password} = req.body;
    try{
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        if (await UserDAO.existingUser(email)){
            return res.status(409).json({error:"Email already registered."})
        }
        const success = UserDAO.registerNewUser(username, email, password, 'reader');
        if (success) {
            console.log("registered new user.")
            return res.status(201).json({message:"user registered. Please login"});
        }else{
            return res.status(500).json({error:"Server error. Please try again later."});
        }

    }catch(error){
        console.error("Error in handle register:", error);
        return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
}

async function authLogin(req:Request, res:Response): Promise<any>{
    const {email, password} = req.body;
    console.log(email, password);

    try{
        if (!email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        const validUser:User|boolean = await UserDAO.validateUser(email, password);
        if (!validUser){
            return res.status(401).json({error:'Invalid email or password'});
        }

        const token = jwt.sign({id: validUser.id, email: validUser.email}, secret, {expiresIn:'1h'});

        return res.status(200).json({
            message:'login successfull',
            token:token,
            user:validUser //JSON.stringify(validUser)
        });

    }catch(error){
        console.error("Error in handleLogin:", error);
        return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
}

export {authRegister, authLogin}