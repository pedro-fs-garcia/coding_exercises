import { OkPacket } from "mysql2";
import dbConnection from "../database/dbConnecion";

class LoanDAO{
    static async registerNewLoan(userId:number, bookId:number){
        try{
            const [rows] = await dbConnection.query<OkPacket>(
                'INSERT INTO loans (user_id, book_id, status) VALUES (?, ?, ?)',
                [userId, bookId, 'borrowed']
            );

            if (rows.affectedRows > 0){
                console.log("registerNewLoan executed successfully");
                return true
            }

        }catch(error){
            console.log("erro ao registrar novo empréstimo", error);
        }
        return false;
    }
}

export default LoanDAO;
