import Rating from "../models/Rating";
import { logout } from "./authServices";

export interface Review{
    rating_id:number;
    movie_id:number;
    title:string;
    director:string;
    year:number;
    poster:string;
    evaluation:number;
}



export async function getAllRatings(){

}

export async function getUserReviews(){
    try{
        const token = sessionStorage.getItem('token');
        const response = await fetch('http://localhost:5000/api/get_user_ratings', {
            method:'GET',
            headers:{
                authorization:`Bearer ${token}`
            }
        });

        const data = await response.json();
        console.log("resposta de /api/get_user_ratings", data);

        if (response.status == 409){
            alert(data.error);
        }else if (response.status == 400){
            alert(data.error);
        }else if (response.status == 500){
            alert (data.error);
        }else if(response.status == 403){
            logout();
        }

        const arrayResponse = Array.isArray(data.ratingList) ? data.ratingList : [];
        const ratingList: Review[] = arrayResponse.map((review: Review) => ({
            rating_id: review.rating_id,
            movie_id: review.movie_id,
            title: review.title,
            director: review.director,
            year: review.year,
            poster: review.poster,
            evaluation: review.evaluation
        }));
        console.log("ratingList: ", ratingList)

        return ratingList;
    }catch(error){
        console.error("Erro ao conectar para obter ratings do usuario");
    }
    return [];
}