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


class Arena {
    public movie1:Movie;
    public movie2:Movie;
    public winner:number|null = null;

    constructor(movie1:Movie, movie2:Movie){
        this.movie1 = movie1;
        this.movie2 = movie2;
    }

    public toJson() {
        return {
            movie1: this.movie1,
            movie2: this.movie2,
            winner: this.winner
        }
    }
    
}


export {Movie, Arena}