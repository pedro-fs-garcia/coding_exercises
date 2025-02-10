import dbConnection from "../database/dbConnecion";

export async function fetchUserFavorites(userId: number){
    let favoritesArray = [];
    try {
        const [rows]:any = await dbConnection.query(
            'SELECT movie_id FROM favorites WHERE user_id = ?',
            [userId]
        );
        if (rows && rows.length > 0){
            rows.forEach((row:any) =>{
                favoritesArray.push(row.movie_id);
            });
        }
    } catch (error) {
        console.error("erro ao acessar o banco de dados e acessar os favoritos do usuario", error);
    }
    return favoritesArray;
}

export async function insertNewFavorite(user_id: number, movie_id:number){
    try{
        const [rows]:any = await dbConnection.query(
            'INSERT INTO favorites (movie_id, user_id) VALUES (?, ?)',
            [movie_id, user_id]
        );
        if(rows && rows.affectedRows > 0){
            return true;
        }
    }catch(error){
        console.error("erro ao inserir no vo favorito", error);
    }
    return false;
}

export async function deleteFavorite(movie_id:number, user_id:number){
    try{
        const [rows]: any = await dbConnection.query(
            'DELETE FROM favorites WHERE movie_id = ? AND user_id = ?',
            [movie_id, user_id]
        );
        if (rows && rows.affectedRows > 0){
            return true;
        }
    }catch(error){
        console.error("erro ao deletar favorito", error);
    }
    return false;
}