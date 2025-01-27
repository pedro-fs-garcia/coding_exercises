import { dbConnection } from "../services/database";
import { Movie, Arena } from "../models/models";

async function getNewArena(): Promise<Arena | null> {
    let movieList: Movie[] = [];

    try {
        const [rows]: any = await dbConnection.query('SELECT * FROM movies ORDER BY RAND() LIMIT 2');

        if (rows && rows.length > 0) {
            rows.forEach((row: any) => {
                movieList.push(new Movie(row.id, row.title, row.director, row.year, row.poster, row.elo));
            });
        }

        if (movieList.length >= 2) {
            return new Arena(movieList[0], movieList[1]);
        } else {
            console.error('Not enough movies found for the arena.');
        }

    } catch (error) {
        console.error('Database query failed:', error);
    }

    return null;
}





export {getNewArena};