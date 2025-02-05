import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import logger from "./logger";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET as string;

export function generateToken(userId: number, username:String) {
    try{
        const token = jwt.sign({ userId:userId, usrname:username }, SECRET_KEY, { expiresIn: "1h" });
        if (token){
            logger.info("token de login criado com sucesso");
            return token;
        }
    }catch(error){
        logger.error("erro ao gerar token de login", error);
    }
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch {
        return null;
    }
}
