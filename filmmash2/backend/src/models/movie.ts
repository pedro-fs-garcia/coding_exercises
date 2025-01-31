import { dbConnection } from "../database/databaseConnection";

class Movie {
    public id: number;
    public title: string;
    public director: string;
    public year: number;
    public poster: string;
    public elo: number;

    constructor(id:number, title: string, director: string, year: number, poster: string, elo: number) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.poster = poster;
        this.elo = elo;
    }

    public async updateScore() : Promise<boolean> {
        try{
            const [rows]: any = await dbConnection.query(
                'UPDATE movies SET elo = ? WHERE id = ?', [this.elo, this.id]);
    
            if (rows){
                console.log(`ELO score of the movie ${this.title} was updated.`)
                return true;
            }
    
        } catch (error) {
            console.error("Failed to update movie ELO score:", error)
        }
        return false;
    }
}

export default Movie;