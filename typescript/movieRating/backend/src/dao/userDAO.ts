import { OkPacket, ResultSetHeader } from "mysql2";
import dbConnection from "../database/dbConnecion";
import User from "../models/User";
import logger from "../utils/logger";

export async function validateUser(username:String, password:String):Promise<User|any>{
    try{
        const [rows] = await dbConnection.query(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password]
        );
    
        if (Array.isArray(rows) && rows.length > 0) {
            const user = rows[0] as User;
            logger.info("usuário encontrado no banco de dados.");
            return user;
        }
    }catch(error){
        logger.error("erro ao buscar usuario no banco de dados", error);
    }
    return false;

}

export async function existingUser(username:String):Promise<boolean>{
    return false;
}

export async function registerNewUser(username:String, password:String):Promise<boolean>{
    try{
        const [rows] = await dbConnection.query<ResultSetHeader>(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, password]
        );
        console.log(rows);
        
        if(rows.affectedRows > 0){
            return true;
        }

    }catch(error){
        logger.error("Erro ao registrar usuário")
    }
    return false;
}