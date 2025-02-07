class Rating{
    public id: number;
    public user_id:number;
    public movie_id:number;
    public evaluation:number;

    constructor(id:number, user_id:number, movie_id:number, evaluation:number){
        this.id = id;
        this.user_id = user_id;
        this.movie_id = movie_id;
        this.evaluation = evaluation;
    }
}

export default Rating;