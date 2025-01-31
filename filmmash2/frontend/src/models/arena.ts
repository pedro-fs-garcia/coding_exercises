import Movie from "./movie";

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

export default Arena;