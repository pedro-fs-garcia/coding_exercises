import { OkPacket, ResultSetHeader, RowDataPacket } from "mysql2";
import dbConnection from "../database/dbConnecion";
import User from "../models/User";

class UserDAO{
    static dbConnection = dbConnection;

    static async existingUser (email:String) : Promise<boolean> {
        try{
            const [existingUser] = await this.dbConnection.query(
                'SELECT id FROM users WHERE email = ?',
                [email]
            )

            if ((existingUser as any[]).length > 0) {
                console.error("Email já registrado.");
                return true; // Usuário já existe
            }
        }catch(error){
            console.error(error);
        }
        return false;
    }

    static async registerNewUser (username:String, email:String, password:String, role:String):Promise<boolean>{
        const existingUser = await this.existingUser(email);
        console.log(username, email, password, role)
        if (existingUser){
            console.log("registerNewUser: user already exists")
            return false;
        }

        try{
            const [rows] = await this.dbConnection.query<OkPacket>(
                'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
                [username, email, password, role]
            );
            
            if (rows.affectedRows > 0){
                console.log("registerNewUser executed successfully");
                return true
            }

        }catch(error){
            console.log(error);
        }
        return false;
    }

    static async validateUser (email:String, password:String){
        try{
            const [rows] = await dbConnection.query<RowDataPacket[]>(
                'SELECT * FROM users WHERE email = ? AND password = ?',
                [email, password]
            );
            if (rows.length == 0){
                return false;
            }
            const user = rows[0] as User;
            return user;

        }catch (error){
            console.error(error);
            return false;
        }
    }

    static async getAllUsers():Promise<User[] | null>{
        let usersJson: any[] = [];
        try{
            const [rows]:any = await dbConnection.query(
                'SELECT * FROM users'
            );

            if (rows && rows.length > 0){
                rows.forEach((row:any) => {
                    console.log("user no loop for: ", row.username);
                    usersJson.push({
                        id: row.id,
                        username:row.username,
                        email:row.email,
                        password:row.password,
                        role:row.role,
                        created_at:row.created_at
                    });
                });
            }
            console.log("usersJson: ", usersJson);
            return usersJson;

        }catch(error){
            console.error(error);
            return null;
        }
    }

    static async updateUser(user:User){
        try{
            const [rows] = await this.dbConnection.query<OkPacket>(
                'UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?',
                [user.username, user.email, user.role, user.id]
            );

            if (rows.affectedRows > 0){
                console.log('usuário atualizado com sucesso');
                return true;
            }

        }catch(error){
            console.log(error);
        }
        return false;
    }

    static async deleteUser(id:number){
        try{
            const [rows] = await this.dbConnection.query<OkPacket>(
                'DELETE FROM users WHERE id = ?',
                [id]
            );

            if (rows.affectedRows > 0){
                console.log('usuário excuído com sucesso');
                return true;
            }

        }catch(error){
            console.error("userdao deleteuser: ", error)
        }
        return false;
    }
}

export default UserDAO;