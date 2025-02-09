import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { adminDeleteMovie, adminUpdateMovie, getMovieSearch } from "../services/movieServices";
import MovieModal from "../components/movieModal";

function ManageMoviesPage(){
    const [search, setSearch] = useState('');
    const [selectedMovie, setSelectedMovie] = useState<Movie|null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movies, setMovies] = useState<Movie[]|null>([]);

    const loadMovies = async () =>{
        let movieList: Movie[]|null = [];
        if(search.length == 0){
          movieList = await getMovieSearch("");
        }else if (search.length > 2){
          movieList = await getMovieSearch(search);
        }
        setMovies(movieList);
    }

    const handleSave = async (movie_id:number, title:string, director:string, year:number, poster:string) => {
        await adminUpdateMovie(movie_id, title, director, year, poster);
        setIsModalOpen(false);
    }

    const handleDeleteMovie = async (movieId:number) => {
        await adminDeleteMovie(movieId);
        loadMovies();
    }

    const closeMovieModal = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
    loadMovies()
    }, [search]);

    return(
        <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Gerenciar Filmes</h1>
        <input
          placeholder="Buscar filmes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />
        <button
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => {
            setSelectedMovie(null);
            setIsModalOpen(true);
          }}
        >
          Adicionar Filme
        </button>
        <div className="grid gap-4">
          {movies?.map((movie:Movie) => (
            <div key={movie.id} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
              <img src={movie.poster} alt={movie.title} className="w-16 h-24 rounded" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <div className="mt-2 flex gap-2">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={() => {
                        setSelectedMovie(movie);
                        setIsModalOpen(true);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  

        {isModalOpen && <MovieModal movie={selectedMovie} onSave={handleSave} onClose={closeMovieModal}/>}
      </div>
    );
}

export default ManageMoviesPage;