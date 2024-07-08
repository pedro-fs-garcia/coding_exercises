public class Book{
    public String title;
    public String author;
    public boolean isBorrowed;

    public Book(String title, String author){
        this.title = title;
        this.author = author;
    }

    public void borrowBook(){
        this.isBorrowed = true;
    }

    public void returnBook(){
        this.isBorrowed = false;
    }

    public boolean isAvailable(){
        return !this.isBorrowed;
    }

    public String getTitle(){
        return this.title;
    }

    public String getAuthor(){
        return this.author;
    }
}