import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import logger from "./logger";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET as string;

export function generateToken(userId: number, username:String) {
    try{
        const token = jwt.sign({ userId:userId, username:username }, SECRET_KEY, { expiresIn: "1h" });
        if (token){
            logger.info("token de login criado com sucesso");
            return token;
        }
    }catch(error){
        logger.error("erro ao gerar token de login", error);
    }
}

//Middleware para verificar JWT no acesso a rotas protegidas
export function verifyToken(req:Request, res:Response, next:NextFunction): void{
    const token = req.header('Authorization')?.split(' ')[1]; // Esperando "Bearer <token>"
    console.log(token);
    if (!token){
        console.log('token de login não fornecido')
        res.status(401).json({error:'token de login não fornecido'});
        return;
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if(err){
            console.log('token inválido ou expirado')
            res.status(403).json({error:'token inválido ou expirado'});
            return;
        }
        req.user = decoded;
        console.log('req.user', req.user);
        next()
    });
};
