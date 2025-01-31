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
}

export default Movie;