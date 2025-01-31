import { OkPacket } from "mysql2/promise";
import { dbConnection } from "../database/databaseConnection";

async function registerNewBattle(winner_id:number, loser_id:number, user_id:number):Promise<boolean>{
    try{
        const [rows]: any = await dbConnection.query<OkPacket>(
            'INSERT INTO battles (winner_id, loser_id, user_id) VALUES (?, ?, ?)',
            [winner_id, loser_id, user_id]
        );

        if (rows.affectedRows > 0) {
            console.log("Battle registered successfully.");
            return true;
        }

    }catch(error){
        console.error("Failed to insert battle into database:", error);
    }
    return false;
}

async function getBattlesByUserId(user_id:number){
    let battlesJson: any[] = []

    try{
        const [rows]: any = await dbConnection.query(
            "SELECT * FROM battles WHERE user_id = ?",
            [user_id]
        );

        if (rows && rows.length > 0){
            rows.forEach((row:any) => {
                battlesJson.push({
                    id:row.id,
                    winner_id:row.winner_id,
                    loser_id:row.loser_id,
                    user_id:row.user_id,
                    battle_date:row.battle_date
                });
            });
        }
        return battlesJson;
        
    }catch(error){
        console.error("Failed to get battles from database:", error);
    }
    return false;
}


export {registerNewBattle, getBattlesByUserId}