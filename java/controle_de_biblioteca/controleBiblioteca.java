import java.util.Scanner;
public class controleBiblioteca{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Library newLib = new Library("livros do pedro");
        addBooksToLib(newLib);
        addReaderToLib(newLib);
        System.out.println("Abrir biblioteca?");
        String opened = scanner.nextLine();
        while (opened.equals("s")){
            functioningLibrary(newLib);
            System.out.println("manter a biblioteca funcionando?");
            opened = scanner.nextLine();
        }
    }

    public static void addBooksToLib(Library myLib){
        Scanner scanner = new Scanner(System.in);
        System.out.println("insira os nomes dos livros da biblioteca separados por espaço");
        String livros = scanner.nextLine();
        for (String l : livros.split("\\s+")){
            Book book = new Book (l.strip(), "unknown");
            myLib.addbook(book);
        }
    }

    public static void addReaderToLib(Library myLib){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Insira os nomes dos dos leitores separados por espaços");
        String leitores = scanner.nextLine();
        for (String l : leitores.split("\\s+")){
            Reader reader = new Reader(l.strip());
            myLib.registerReader(reader);
        }
    }

    public static void functioningLibrary(Library myLib){
        Scanner scanner = new Scanner(System.in);
        System.out.println("emprestar(em), devolver(de), adicionar livro (li), adicionar leitor (le)");
        String command = scanner.nextLine();
        if (command.equals("em")){
            System.out.println("digite o nome o livro");
            String bookTitle = scanner.nextLine();
            System.out.println("Digite o nome do leitor");
            String nameReader = scanner.nextLine();
            Reader reader = myLib.getReaderByName(nameReader);
            Book book = myLib.getBookByTitle(bookTitle);
            myLib.lendBook(book, reader);

        }else if (command.equals("de")){
            System.out.println("digite o nome o livro");
            String bookTitle = scanner.nextLine();
            System.out.println("Digite o nome do leitor");
            String nameReader = scanner.nextLine();
            Reader reader = myLib.getReaderByName(nameReader);
            Book book = myLib.getBookByTitle(bookTitle);
            myLib.returnBook(book, reader);

        }else if (command.equals("li")){
            addBooksToLib(myLib);
        }else if (command.equals("le")) {
            addReaderToLib(myLib);
        }
    }
}