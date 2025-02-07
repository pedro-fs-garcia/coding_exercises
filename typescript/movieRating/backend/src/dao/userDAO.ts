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

export async function getAllUsers():Promise<User[]>{
    let userArray:User[] = [];
    try{
        const [rows]:any = await dbConnection.query(
            'SELECT * FROM users'
        );

        if (rows && rows.length > 0){
            rows.forEach((row:any) =>{
                userArray.push(
                    new User(
                        row.id,
                        row.username,
                        row.password,
                        row.permission
                    )
                );
            });
        }
        logger.info("acesso ao banco de dados executado com sucesso");

    }catch(error){
        logger.error("erro ao acessar o banco de dados e acessar todos os usuários");
    }
    // console.log(userArray);
    return userArray;
}

export async function insertNewUser(username:String, password:String, permission:String){
    try{
        const [rows] = await dbConnection.query<ResultSetHeader>(
            'INSERT INTO users (username, password, permission) VALUES (?, ?, ?)',
            [username, password, permission]
        );

        if (rows.affectedRows > 0){
            return true;
        }

    }catch(error){
        logger.error("Erro ao inserir usuario no banco de dados");
    }
    return false;
}

export async function updateUser(user:User){
    try{
        const [rows] = await dbConnection.query<ResultSetHeader>(
            'UPDATE users SET username = ?, password = ?, permission = ? WHERE id = ?',
            [user.username, user.password, user.permission, user.id]
        );

        if (rows.affectedRows > 0){
            return true;
        }

    }catch(error){
        logger.error("updateUser: Error: Erro ao atualizar usuario", error);
    }
    return false;
}

export async function deleteUser(id:number){
    try{
        
        const [rows] = await dbConnection.query<ResultSetHeader>(
            'DELETE FROM users WHERE id = ?',
            [id]
        );

        if (rows.affectedRows > 0){
            return true;
        }

    }catch(error){
        logger.error("updateUser: Error: Erro ao atualizar usuario", error);
    }
    return false;
}