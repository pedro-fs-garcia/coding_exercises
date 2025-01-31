import { OkPacket, RowDataPacket } from 'mysql2/promise'; // Import necessário para tipar os resultados da consulta
import User from "../models/user";
import { dbConnection } from "../database/databaseConnection";


async function registerUser(user:User):Promise<boolean> {
    try{
        const [result] = await dbConnection.query<OkPacket>(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
            [user.username, user.email, user.password]
        );
        if (result.affectedRows > 0) {
            console.log("Registered user successfully.");
            return true;
        }
        return false;

    }catch(error){
        console.error(error);
        return false;
    }
}

async function existingUser(user:User){
    try{
        const [existingUsers] = await dbConnection.query(
            'SELECT id FROM users WHERE email = ?',
            [user.email]
        );

        if ((existingUsers as any[]).length > 0) {
            console.error("Email já registrado.");
            return true; // Usuário já existe
        }

    }catch (error){
        console.error(error);
    }
    return false;
}

async function validateUser(email:String, password:String): Promise<User|null> {
    try{
        const [rows] = await dbConnection.query<RowDataPacket[]>(
            'SELECT * FROM users WHERE email = ? AND password = ?',
            [email, password]
        );
        if (rows.length === 0){
            return null;
        }
        const user = rows[0] as User;
        return user
    }catch(error){
        console.error(error)
        return null;
    }
}

async function getUserById(id:number){
    try{
        const [rows] = await dbConnection.query<RowDataPacket[]>(
            'Select * FROM users WHERE id = ?',
            [id]
        );
        if (rows.length === 0){
            return null
        }
        const user = rows[0] as User;
        return user
    }catch(error){
        console.error(error)
        return null;
    }
}

export {registerUser, validateUser, existingUser, getUserById};