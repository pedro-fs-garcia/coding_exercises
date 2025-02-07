import dbConnection from "../database/dbConnecion";
import Movie from "../models/Movie";

export async function getAllMovies():Promise<Movie[]>{
    let movieArray: Movie[] = [];
    
    try{
        const [rows]:any = await dbConnection.query(
            'SELECT * FROM movies'
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
            "SELECT id, title, poster FROM movies WHERE title LIKE ? LIMIT 10",
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