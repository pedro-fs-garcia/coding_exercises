import express from 'express';
import dotenv from "dotenv";
import { authLogin, authRegister } from '../services/authServices';

const userRouter = express.Router()

userRouter.post("/register", authRegister);
userRouter.post("/login", authLogin)

export default userRouter;