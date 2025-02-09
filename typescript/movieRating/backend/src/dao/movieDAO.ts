import dbConnection from "../database/dbConnecion";
import Movie from "../models/Movie";
import logger from "../utils/logger";
import { deleteRating, getRatingsByMovieId } from "./ratingDAO";

export async function getAllMovies():Promise<Movie[]>{
    let movieArray: Movie[] = [];
    
    try{
        const [rows]:any = await dbConnection.query(
            'SELECT * FROM movies ORDER BY RAND () LIMIT 5'
        );
        if (rows && rows.length > 0){
            rows.forEach((row:any) =>{
                movieArray.push(
                    new Movie(
                        row.id,
                        row.title,
                        row.director,
                        row.year,
                        row.poster
                    )
                );
            });
        }
        console.log("filmes acessados com sucesso");
    }catch(error){
        console.error("erro ao acessar o banco de dados e acessar todos os filmes")
    }
    return movieArray;
}

export async function searchMovies(search:String):Promise<Movie[]>{
    let movieArray: Movie[] = [];
    try{
        const [rows]:any = await dbConnection.query(
            "SELECT * FROM movies WHERE title LIKE ? LIMIT 10",
            [`%${search}%`]
        );
        if (rows && rows.length > 0){
            rows.forEach((row:any) =>{
                movieArray.push(
                    new Movie(
                        row.id,
                        row.title,
                        row.director,
                        row.year,
                        row.poster
                    )
                );
            });
        }
        console.log("filmes acessados com sucesso");
    }catch(error){
        console.error("erro ao acessar o banco de dados e acessar todos os filmes")
    }
    return movieArray;
}

export async function updateMovie(id:number, title:string, director:string, year:number, poster:string){
    try{
        const [rows]:any = await dbConnection.query(
            'UPDATE movies SET title = ?, director = ?, year = ?, poster = ? WHERE id = ?',
            [title, director, year, poster, id]
        );
        if (rows.affectedRows > 0){
            console.log("filme atualizado");
            return true;
        }

    }catch(error){
        console.error("updateMovie: Error: Erro ao atualizar filme", error);
    }
    return false;
}

export async function deleteMovie(movie_id:number){
    try{
        let ratings:any = await getRatingsByMovieId(movie_id);
        if (ratings.length > 0){
            ratings.forEach((id) => {
                deleteRating(id)
            });
        }
        const [rows]: any = await dbConnection.query(
            'DELETE FROM movies WHERE id = ?',
            [movie_id]
        );
        if (rows.affectedRows > 0){
            console.log("filme excluído");
            return true;
        }
    }catch(error){
        logger.error("deleteMovie: error: erro ao deletar filme",error);
    }
    return false;
}