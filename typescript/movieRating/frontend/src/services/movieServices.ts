import Movie from "../models/Movie";
import { FavoriteMovie } from "../pages/favoritesPage";
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
        console.log(movieList);
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

export async function adminUpdateMovie(id:number, title:string, director:string, year:number, poster:string){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch("http://localhost:5000/api/admin/update_movie", {
            method:'PUT',
            headers:{
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({id, title, director, year, poster})
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
        console.error("Erro ao acessar servidor para atualizar filme");
    }
}

export async function adminDeleteMovie(movieId:number){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/admin/delete_movie/${movieId}`, {
            method:"DELETE",
            headers:{
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            }
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
        console.error("erro ao acessar servidor para deletar filme")
    }
}

export async function getUserFavorites(){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch("http://localhost:5000/api/movies/get_user_favorites", {
            method: "GET",
            headers:{
                authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        const arrayResponse = Array.isArray(data.favoritesList) ? data.favoritesList : [];
        const favoritesList: number[] = arrayResponse.map((id:number) => 
            id
        );
        console.log('favoritesList: ', favoritesList);
        return favoritesList;
    }catch(error){
        console.error("erro ao acessar o servidor para buscar os favoritos");
    }
    return [];
}

export async function postNewFavorite(movieId:number){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch("http://localhost:5000/api/movies/new_favorite", {
            method: "POST",
            headers:{
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body:JSON.stringify({movie_id:movieId})
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
        console.error("Falha ao favoritar filme:", error);
    }
    return false;
}

export async function deleteFavorite(movieId:number){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/movies/delete_favorite',{
            method:"DELETE",
            headers:{
                "Content-type":"application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({movie_id:movieId})
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
        console.error("erro ao acessar servidor para remover favorito", error);
    }
    return false;
}

export async function getFavoriteMovies(){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch("http://localhost:5000/api/favorites/get_favorite_movies", {
            method: "GET",
            headers:{
                authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        const arrayResponse = Array.isArray(data.favoriteMovies) ? data.favoriteMovies : [];
        const favoriteMovies: FavoriteMovie[] = arrayResponse.map((movie: FavoriteMovie) => ({
            rating_id: movie.rating_id,
            movie_id: movie.movie_id,
            title: movie.title,
            director: movie.director,
            year: movie.year,
            poster: movie.poster,
            evaluation: movie.evaluation
        }));
        console.log('favoriteMovies: ', favoriteMovies);
        return favoriteMovies;
    }catch(error){
        console.error("erro ao acessar o servidor para buscar os favoritos");
    }
    return [];
}