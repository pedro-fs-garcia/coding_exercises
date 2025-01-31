import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RatingsPage(){
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [movieList, setMovieList] = useState<any[]>([]);

    useEffect(() => {
        async function fetchAllMovies() {
            try{
                setLoading(true)

                if (!token) {
                    throw new Error("User not authenticated. Please log in.");
                }

                const response = await fetch("http://localhost:5000/get_all_ratings", {
                    method:"GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error("Session expired. Please log in again.");
                    } else {
                        throw new Error(`Error fetching movies: ${response.statusText}`);
                    }
                }

                const data = await response.json();
                setMovieList(data.movies);
                console.log(movieList)

            } catch (err) {
                const errorMessage = (err as Error).message;
                setError(errorMessage);

                // Se o erro for relacionado à autenticação, redireciona para o login
                if (errorMessage.includes("log in")) {
                    navigate("/login");
                }
            } finally {
                setLoading(false);
            }

        }
    
        fetchAllMovies();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return(
        <>
        <div className="flex flex-col items-center space-y-6">
            {movieList.map((filme:any) => (
                <div key={filme.id} className="bg-white p-6 rounded-lg shadow-lg flex max-w-lg">
                    <img src={filme.poster} alt="Pôster do Filme" className="w-40 h-auto rounded-lg"/>
                    <div className="ml-6 flex flex-col justify-center">
                        <h1 className="text-2xl font-bold">{filme.title}</h1>
                        <p className="text-gray-700">Diretor: {filme.director}</p>
                        <p className="text-gray-700">Ano: {filme.year}</p>
                        <p className="text-gray-700">ELO: {filme.elo}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}

export default RatingsPage;