import Book from "../models/Book";
import AuthService from "./AuthService";

async function getBooks(){
    const token = sessionStorage.getItem('token');
    try{
        const response = await fetch("http://localhost:5000/api/books/get_books", {
            method:"GET",
            headers:{
                Authorization: `Bearer ${token}`,
            }
        });

        const data = await response.json();
        console.log(data);

        if (response.status == 409){
            alert(data.error);
        }else if (response.status == 400){
            alert(data.error);
        }else if (response.status == 500){
            alert (data.error);
        }else if(response.status == 403){
            AuthService.logout();
        }
        
        const bookResponse = Array.isArray(data.allBooks) ? data.allBooks : [];
        const bookList: Book[] = bookResponse.map((book:any) => 
            new Book(book.id, book.title, book.suthor, book.publication_year, book.genre, book.available, book.created_at)
        );

        return bookList;

    }catch(error){
        console.error("Falha ao obter os livros:", error);
        return null;
    }
}

async function borrowBook(bookId:number){
    const token = sessionStorage.getItem('token');
    const userString = sessionStorage.getItem('user');
    if (userString){
        let user = JSON.parse(userString);
        const userId = user.id;
        try{
            const response = await fetch(`http://localhost:5000/api/books/borrow/${bookId}`, {
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({userId, bookId})
            });

            const data = await response.json();
            console.log(data);

            if (response.status == 409){
                alert(data.error);
            }else if (response.status == 400){
                alert(data.error);
            }else if (response.status == 500){
                alert (data.error);
            }else if (response.status == 201){
                //alert(data.message)
                return true;
            }
        
        }catch(error){
            console.error("falha ao registrar emprestimo de livro", error);
            return false
        }
    }
    return false;
}

export {getBooks, borrowBook}