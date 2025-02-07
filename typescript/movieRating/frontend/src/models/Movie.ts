class Movie{
    public id: number;
    public title:String;
    public director:String;
    public year:number;
    public poster: string;

    constructor(id:number, title:String, director:String, year:number, poster:string){
        this.id = id;
        this.title = title;
        this.director = director;
        this.year = year;
        this.poster = poster;
    }
}

export default Movie;