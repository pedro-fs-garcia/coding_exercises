import java.util.ArrayList;

public class Library{
    public String libName = new String();
    public ArrayList<Book> books = new ArrayList<>();
    public ArrayList<Reader> readers = new ArrayList<>();

    public Library(String name){
        this.libName = name;
    }

    public void addbook(Book book){
        this.books.add(book);
    }

    public void registerReader (Reader reader){
        this.readers.add(reader);
    }

    public void lendBook (Book book, Reader reader){
        if (book.isAvailable()){
            book.borrowBook();
            reader.borrowBook(book);
        }else{
            System.out.printf("O livro %s não está disponível%n", book.title);
        }
    }

    public void returnBook(Book book, Reader reader){
        reader.returnBook(book);
        book.returnBook();
        System.out.println("O livro foi devolvido");
    }

    public ArrayList<Book> listAvailableBooks(){
        ArrayList<Book> livros = new ArrayList<>();
        for (Book b : this.books){
            if (b.isAvailable()){
                livros.add(b);
            }
        }
        return livros;
    }

    public ArrayList<Book> listBorrowedBooks(){
        ArrayList<Book> livros = new ArrayList<>();
        for (Book b : this.books){
            if (!b.isAvailable()){
                livros.add(b);
            }
        }
        return livros;
    }

    public Book getBookByTitle(String name){
        ArrayList<Book> livros = this.listAvailableBooks();
        ArrayList<Book> livrosempr = this.listBorrowedBooks();
        for (Book b : livros){
            if (name.equals(b.title)){
                return b;
            }
        }
        for (Book b: livrosempr){
            if (name.equals(b.title)){
                return b;
            }
        }
        return null;
    }

    public Reader getReaderByName(String name){
        ArrayList<Reader> leitores = this.readers;
        for (Reader r : leitores){
            if (name.equals(r.name)){
                return r;
            }
        }
        return null;
    }
}