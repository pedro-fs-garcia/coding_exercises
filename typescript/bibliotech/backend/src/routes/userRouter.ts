import express from 'express';
import dotenv from "dotenv";
import { authLogin, authRegister, logout, refreshAccessToken } from '../services/authServices';

const userRouter = express.Router()

userRouter.post("/register", authRegister);
userRouter.post("/login", authLogin);
userRouter.post('/refresh_access_token', refreshAccessToken);
userRouter.post('/logout', logout)

export default userRouter;