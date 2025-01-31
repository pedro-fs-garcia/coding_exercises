import { dbConnection } from "../database/databaseConnection";
import Movie from "../models/movie";

async function updateScore(movie:Movie) : Promise<boolean> {
    try{
        const [rows]: any = await dbConnection.query(
            'UPDATE movies SET elo = ? WHERE id = ?', [movie.elo, movie.id]);

        if (rows){
            console.log(`ELO score of the movie ${movie.title} was updated.`)
            return true;
        }

    } catch (error) {
        console.error("Failed to update movie ELO score:", error)
    }
    return false;
}

async function getAllMovies(){
    let moviesJson : any[] = [];
    try{
        const[rows]: any = await dbConnection.query('SELECT * FROM movies');

        if (rows && rows.length > 0){
            rows.forEach((row:any) => {
                moviesJson.push({
                    id: row.id,
                    title: row.title,
                    director: row.director,
                    year: row.year,
                    poster: row.poster,
                    elo: row.elo
                });
            });
        }

        return moviesJson;

    }catch (error){
        console.error("Failed to retrive movies from database.");
    }
    return null;
}

export {updateScore, getAllMovies}