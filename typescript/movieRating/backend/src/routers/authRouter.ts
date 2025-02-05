import express, { Request, Response } from "express";
import dotenv from "dotenv";
import logger from "../utils/logger";
import { generateToken } from "../utils/userToken";
import { existingUser, registerNewUser, validateUser } from "../dao/userDAO";

dotenv.config();

const authRouter = express.Router();

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

authRouter.post('/login', login);
authRouter.post('/register', register);

async function register(req:Request, res:Response):Promise<any>{
    const {username, password} = req.body;
    try{
        if (!username || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        if (await existingUser(username)){
            return res.status(409).json({error:"Username already registered."});
        }
        
        const success = registerNewUser(username, password);

        if (success) {
            console.log("registered new user.");
            return res.status(200).json({message:"user registered. Please login"});
        }else{
            return res.status(500).json({error:"Server error. Please try again later."});
        }

    }catch(error){
        console.error("Erro ao registrar usuario:", error);
        return res.status(500).json({ error: 'ocorreu um erro inesperado' });
    }
}

async function login(req:Request, res:Response):Promise<any>{
    logger.info("nova requisição de login");

    const {username, password} = req.body;
    logger.info(`usuário ${username} fez uma requisição de login`);

    if (!username || !password) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try{
        const user = await validateUser(username, password);

        if (user){
            const token = generateToken(user.id, user.username);
            logger.info("login bem-sucedido");

            return res.status(200).json({
                message: "Login bem-sucedido!",
                token: token,
                user: user
            });
        }
        
        logger.info("credenciais de usuário inválidas")
        return res.status(401).json({ message: "Usuário ou senha inválidos" });

    }catch(error){
        logger.error("Excessão ao executar login:", error);
        return res.status(500).json({error: "Erro interno do servidor"});
    }
}

export default authRouter;