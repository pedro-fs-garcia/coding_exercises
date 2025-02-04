import { OkPacket } from "mysql2";
import dbConnection from "../database/dbConnecion";
import Book from "../models/Book";

class BookDAO{
    static dbConnection = dbConnection;

    static async getAllBooks(){
        let booksArray: Book[] = [];
        try{
            const [rows]:any = await dbConnection.query(
                'SELECT * from books'
            );

            if (rows && rows.length > 0){
                rows.forEach((row:any) => {
                    console.log("book no loop for: ", row.username);
                    booksArray.push({
                        id: row.id,
                        title: row.title,
                        author: row.author,
                        publication_year: row.publication_year,
                        genre: row.genre,
                        available: row.available,
                        created_at: row.created_at
                    });
                });
            }
            console.log("booksArray:", booksArray);
            return booksArray;

        }catch(error){
            console.error(error);
            return null;
        }
    }

    static async setBookUnavailable(bookId:number){
        try{
            const [rows] = await dbConnection.query<OkPacket>(
                'UPDATE books SET available = ? WHERE id = ?',
                [false, bookId]
            );

            if (rows.affectedRows > 0){
                console.log('livro alterado para não disponível');
                return true;
            }

        }catch(error){
            console.error("erro ao mudar disponibilidade do livro.");
        }
        return false;
    }
}

export default BookDAO;