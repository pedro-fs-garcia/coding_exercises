import express, { NextFunction } from 'express';
import {Request, Response} from "express";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { existingUser, getUserById, registerUser, validateUser } from '../dao/userDAO';
import authenticateToken from '../middlewares/authMiddleware';

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

const handleLogin = async(req:Request, res:Response) => {
  const {email, password} = req.body;
  try{
    if(!email || !password){
      return res.status(400).json({error: 'Email and password are required.'});
    }

    const validUser = await validateUser(email, password);
    if (!validUser){
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const loginToken = jwt.sign({ id: validUser.id, email: validUser.email }, secret, { expiresIn: '1h' });

    return res.status(200).json({ message: 'Login successful!', loginToken:loginToken, userId:validUser.id });

  }catch(error){
    console.error("Error in handleLogin:", error);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}

const dashboard = async (req:Request, res:Response) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const user = await getUserById(req.user.id)
  if (!user){
    return res.status(401).json({ error: "Unauthorized" });
  }else{
    res.json({ 
        user: { 
            id: user.id, 
            username: user.username, 
            email: user.email,
            password: user.password 
        } 
    });
  }
}



const userRouter = express.Router();

userRouter.post("/register", async (req: Request, res: Response) => {await handleRegister(req, res);});
userRouter.post("/login", async (req: Request, res: Response) => {await handleLogin(req, res);})
userRouter.get("/dashboard", authenticateToken, (req: Request, res: Response) => {dashboard(req, res);});


export default userRouter;
