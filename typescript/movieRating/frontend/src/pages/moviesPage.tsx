import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { getMovieSearch, postNewEvaluation } from "../services/movieServices";
import User from "../models/User";
import Movie from "../models/Movie";

const MoviesPage: React.FC = () => {
  const user: User | null = JSON.parse(sessionStorage.getItem('user') || "null");

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<Movie[]|null>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMovies = async () =>{
    let movieList: Movie[]|null = [];
    if(search.length == 0){
      movieList = await getMovieSearch("");
    }else if (search.length > 2){
      movieList = await getMovieSearch(search);
    }
    setMovies(movieList);
  }

  const submitRating = async () => {
    if (selectedMovie) {
      const operation = await postNewEvaluation(selectedMovie.id, rating);
      if (operation){
        setIsModalOpen(false);
        setRating(0);
      }
    }
  };

  const setFavorite = async (movie:Movie) => {
    
  }

  useEffect(() => {
    loadMovies()
  }, [search]);
  

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Avalie Filmes</h1>
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="mt-4 grid gap-4">
        {movies?.map((movie) => (
          <div key={movie.id} className="flex items-center gap-4 p-4 border rounded-lg shadow-md bg-white">
            <img src={movie.poster} alt={movie.title} className="w-16 h-24 rounded" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
              <button
                onClick={() => {
                  setSelectedMovie(movie); 
                  setIsModalOpen(true);
                }}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Avaliar
              </button>
              <button
                onClick = {setFavorite(movie)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Adicionar aos Favoritos
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Avaliar {selectedMovie?.title}</h2>
            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`cursor-pointer w-6 h-6 ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <button
              className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={submitRating}
            >
              Enviar Avaliação
            </button>
            <button
              className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;

