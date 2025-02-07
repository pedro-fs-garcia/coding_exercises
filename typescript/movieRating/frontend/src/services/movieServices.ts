import Movie from "../models/Movie";
import { logout } from "./authServices";
// /api/movies?search=${search}
export async function getMovieSearch(search:String){
    try {
        const token = sessionStorage.getItem('token');
        console.log(`http://localhost:5000/api/movies?search=${search}`)
        const response = await fetch (`http://localhost:5000/api/movies?search=${search}`, {
            method:'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        const data = await response.json();
        console.log("data: ", data);

        if (response.status == 409){
            alert(data.error);
        }else if (response.status == 400){
            alert(data.error);
        }else if (response.status == 500){
            alert (data.error);
        }else if(response.status == 403){
            logout();
        }

        const arrayResponse = Array.isArray(data.movieList) ? data.movieList : [];
        const movieList: Movie[] = arrayResponse.map((movie:Movie) =>
            new Movie(movie.id, movie.title, movie.director, movie.year, movie.poster)
        );

        return movieList;

    } catch (error) {
        console.error("Falha ao obter filmes:", error);
        return null;
    }
}

export async function postNewEvaluation(movieId:number, evaluation:number){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch("http://localhost:5000/api/movies/post_evaluation", {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body:JSON.stringify({movieId: movieId, evaluation: evaluation})
        });

        const data = await response.json();
        if (response.status == 409){
            alert(data.error);
        }else if (response.status == 400){
            alert(data.error);
        }else if (response.status == 500){
            alert (data.error);
        }else if(response.status == 403){
            logout();
        }else if (response.status == 200){
            return true;
        }
    }catch(error){
        console.error("Falha ao avaliar filme:", error);
    }
    return false;
}