class Book{
    public id: number;
    public title: String;
    public author: String;
    public publication_year:number;
    public genre:String;
    public available:boolean;
    public created_at: String | null;

    constructor (id:number, title:String, author:String, publication_year:number, genre:String, available:boolean, created_at:String|null){
        this.id = id;
        this.title = title;
        this.author = author;
        this.publication_year = publication_year;
        this.genre = genre;
        this.available = available;
        this.created_at = created_at;
    }

}

export default Book;
`CREATE TABLE IF NOT EXISTS books (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    title VARCHAR(255) NOT NULL,
                    author VARCHAR(255) NOT NULL,
                    publication_year YEAR NOT NULL,
                    genre VARCHAR(100),
                    available BOOLEAN DEFAULT TRUE,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`