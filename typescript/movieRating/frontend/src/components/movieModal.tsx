import { useState } from "react";
import Movie from "../models/Movie";
import { adminUpdateMovie } from "../services/movieServices";

function MovieModal(props:any){
    const [movie, setMovie] = useState<Movie>(props.movie);
    const [title, setTitle] = useState(props.movie ? props.movie.title : "");
    const [director, setDirector] = useState(props.movie ? props.movie.director : "");
    const [year, setYear] = useState(props.movie ? props.movie.year : null);
    const [poster, setPoster] = useState(props.movie ? props.movie.poster : "");
    
    const handleSave = async () => {
        await adminUpdateMovie(props.movie.id, title, director, year, poster);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">
                {props.movie ? "Editar Filme" : "Criar Filme"}
            </h2>
            <img src={poster} alt={title} className="w-16 h-24 rounded" />
            <form onSubmit={handleSave}>
                <p>movie id: {props.movie?.id}</p>
                <input
                    type="text"
                    name="name"
                    placeholder={title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="block w-full border p-2 mb-2"
                />
                <input
                    type="text"
                    name="director"
                    placeholder={director}
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    className="block w-full border p-2 mb-2"
                />
                <input
                    type="number"
                    name="year"
                    min='1800'
                    max='2100'
                    placeholder={year}
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="block w-full border p-2 mb-2"
                />
                <input
                    type="text"
                    name="poster"
                    placeholder={poster}
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    className="block w-full border p-2 mb-2"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                >
                    Salvar
                </button>
                <button onClick={props.onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">
                    Cancelar
                </button>
            </form>
        </div>
    </div>
    );
}

export default MovieModal;