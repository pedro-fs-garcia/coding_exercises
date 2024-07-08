import java.util.ArrayList;
public class Reader{
    
    public String name;
    public ArrayList<Book> borrowedBooks;

    public Reader(String name){
        this.name = name;
    }

    public void borrowBook(Book book){
        if (book.isAvailable()){
            this.borrowedBooks.add(book);
        }
    }

    public void returnBook(Book book){
        this.borrowedBooks.remove(book);
    }

    public String getReader(){
        return this.name;
    }

    public ArrayList<Book> getBorrowedBooks(){
        return this.borrowedBooks;
    }
}