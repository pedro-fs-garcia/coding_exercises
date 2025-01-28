import express, { NextFunction } from 'express';
import {Request, Response} from "express";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { existingUser, registerUser } from '../dao/userDAO';

dotenv.config();

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const handleRegister = async(req:Request, res:Response) => {
  const {username, email, password} = req.body;
  try{
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newUser = new User(null, username, email, password);
    
    const userExists = await existingUser(newUser);
    if (userExists){
      return res.status(409).json({error:"Email already registered."})
    }

    const success = await registerUser(newUser);
    if(success){
      return res.status(201).json({message:"user registered successfully."})
    }else{
      return res.status(500).json({ error: 'Failed to register user. Please try again later.' });
    }

  }catch(error){
    console.error("Error in handleRegister:", error);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
};



const userRouter = express.Router();

userRouter.post("/register", async (req: Request, res: Response) => {await handleRegister(req, res);});


export default userRouter;
