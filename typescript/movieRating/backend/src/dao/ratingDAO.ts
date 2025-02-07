import dbConnection from "../database/dbConnecion";
import Rating from "../models/Rating";
import logger from "../utils/logger";


export async function fetchUserReviewList(userId:number){
    let ratingList:any[] = []
    try{
        const [rows]: any = await dbConnection.query(
            `SELECT title, director, year, poster, movie_id, evaluation, ratings.id as rating_id 
            FROM movies JOIN ratings ON movies.id = ratings.movie_id JOIN users ON users.id = ratings.user_id 
            WHERE users.id = ?`,
            [userId]
        );

        if(rows && rows.length > 0){
            rows.forEach((row:any) => {
                ratingList.push({
                    rating_id: row.rating_id,
                    movie_id: row.movie_id,
                    title: row.title,
                    director: row.director,
                    year: row.year,
                    poster: row.poster,
                    evaluation: row.evaluation
                })
            });
        }
        logger.info("userRatings acessado com sucesso", ratingList);
        console.log("ratingList: ", ratingList)
        return ratingList;
    }catch(error){
        logger.error('fetchUserRatingList: error: erro ao buscar ratings no banco de dados');
    }
    return ratingList;
}

export async function processRating(user_id:number, movie_id:number, evaluation:number){
    try{
        const [rows]:any = await dbConnection.query(
            'SELECT * FROM ratings WHERE user_id = ? AND movie_id = ?',
            [user_id, movie_id]
        );

        if(rows && rows.length > 0){
            return (await updateRating(rows[0].id, evaluation));
        }else{
            return (await createRating(user_id, movie_id, evaluation));
        }

    }catch(error){
        console.log("erro ao verificar se avaliação já existe");
    }
    return false;
}

export async function updateRating(rating_id:number, evaluation:number){
    try{
        const [rows]:any = await dbConnection.query(
            'UPDATE ratings SET evaluation = ? WHERE id = ?',
            [evaluation, rating_id]
        );
        if (rows.affectedRows > 0){
            return true;
        }
    }catch(error){
        logger.error("updateRating: Error: Erro ao atualizar rating", error);
    }
    return false;
}

export async function createRating(user_id:number, movie_id:number, evaluation:number){
    try{
        const [rows]:any = await dbConnection.query(
            'INSERT INTO ratings (user_id, movie_id, evaluation) VALUES (?, ?, ?)',
            [user_id, movie_id, evaluation]
        );

        if (rows.affectedRows > 0){
            return true;
        }
    }catch(error){
        logger.error("erro ao criar avaliação no banco de dados")
    }
    return false;
}