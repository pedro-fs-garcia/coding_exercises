import { NextFunction, Request, Response } from "express";
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
        const refreshToken = jwt.sign({id:validUser.id, email: validUser.email}, secret, {expiresIn:'7d'});

        res.cookie('refreshToken', refreshToken, {
            httpOnly:true,
            secure:false, //true para aceitar somente https
        });
        console.log('cookies criado');

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


//Middleware para verificar JWT no acesso a rotas protegidas
function verifyToken(req:Request, res:Response, next:NextFunction): void{
    const authHeader = req.headers.authorization;
    const token = req.header('Authorization')?.split(' ')[1]; // Esperando "Bearer <token>"
    console.log(token);
    if (!token){
        console.log('token de login não fornecido')
        res.status(401).json({error:'token de login não fornecido'});
        return;
    }

    jwt.verify(token, secret, (err, decoded) => {
        if(err){
            console.log('token inválido ou expirado')
            res.clearCookie('refreshToken');
            res.status(403).json({error:'token inválido ou expirado'});
            return;
        }
        req.user = decoded;
        console.log('req.user', req.user);
        next()
    });
    
};

function refreshAccessToken(req:Request, res:Response): any{
    const refreshToken = req.cookies;
    if (!refreshToken){
        console.log('nenhum Refresh token encontrado');
        return res.status(401).json({error:'nenhum Refresh token encontrado'});
    }

    jwt.verify(refreshToken, secret, (err, decoded) => {
        if(err){
            console.log('refresh token inválido');
            return res.status(403).json({error:'refresh token inválido'});
        }
        const newAccessToken = jwt.sign({id: decoded.id, email: decoded.email}, secret, {expiresIn:'1h'});
        res.json({token:newAccessToken});
    });
}

function logout(req:Request, res:Response):any{
    res.clearCookie('refreshToken');
    res.json({message:'logout ralizado com sucesso'});
}


export {authRegister, authLogin, verifyToken, refreshAccessToken, logout};