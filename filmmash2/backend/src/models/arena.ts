import Movie from "./movie";

class Arena {
    public movie1:Movie|null;
    public movie2:Movie|null;
    public winner:number|null = null;

    constructor(movie1:Movie|null, movie2:Movie|null){
        this.movie1 = movie1;
        this.movie2 = movie2;
        this.winner = 0;
    }

    public calculateNewScores(){
        if (this.winner == null){
            return []
        }else if (this.movie1 && this.movie2){
            let winner:Movie = this.movie1
            let loser:Movie = this.movie2
            if (this.winner == this.movie1.id){
                winner = this.movie1
                loser = this.movie2
            }else if(this.winner == this.movie2.id){
                winner = this.movie2
                loser = this.movie1
            }

                const K = 24
                const RA = winner.elo
                const RB = loser.elo
                const EA = 1/(1+10**((RB-RA)/400))
                const EB = 1/(1+10**((RA-RB)/400))
                let new_RA = RA + K*(1-EA)
                let new_RB = RB + K*(0-EB)
                winner.elo = new_RA
                loser.elo = new_RB
                return [winner, loser]
        }
        return []
    }

    public toJson() {
        if (this.movie1 && this.movie2){
            return {
                movie1: {
                    id: this.movie1.id,
                    title: this.movie1.title,
                    director: this.movie1.director,
                    year: this.movie1.year,
                    elo: this.movie1.elo,
                    poster: this.movie1.poster,
                },
                movie2: {
                    id: this.movie2.id,
                    title: this.movie2.title,
                    director: this.movie2.director,
                    year: this.movie2.year,
                    elo: this.movie2.elo,
                    poster: this.movie2.poster,
                },
                winner: this.winner
            };
        }
    }
    
}

export default Arena;