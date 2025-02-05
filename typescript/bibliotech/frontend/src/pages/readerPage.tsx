import { useEffect, useState } from "react";
import Book from "../models/Book";
import { borrowBook, getBooks } from "../services/BookService";

function ReaderPage(){
    const [books, setBooks] = useState<Book[]|null>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        const data = await getBooks();
        setBooks(data);
    };

    const handleBorrow = async (bookId: number) => {
        console.log("inicia handleBorrow")
        const success = await borrowBook(bookId);
        if (success) {
            alert("Livro emprestado com sucesso!");
            loadBooks();
            window.location.reload();
        } else {
            alert("Erro ao emprestar o livro.");
        }
    };

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Biblioteca</h1>

            <input
                type="text"
                placeholder="Buscar livro..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 w-full mb-4"
            />

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Título</th>
                        <th className="border border-gray-300 p-2">Autor</th>
                        <th className="border border-gray-300 p-2">Disponibilidade</th>
                        <th className="border border-gray-300 p-2">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map((book) => (
                        <tr key={book.id} className="border border-gray-300">
                            <td className="p-2">{book.title}</td>
                            <td className="p-2">{book.author}</td>
                            <td className="p-2">{book.available ? "Disponível" : "Indisponível"}</td>
                            <td className="p-2">
                                {book.available ? (
                                    <button
                                        onClick={() => handleBorrow(book.id)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded"
                                    >
                                        Emprestar
                                    </button>
                                ) : (
                                    <span className="text-gray-500">Indisponível</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ReaderPage;