import express, { Request, Response } from "express";
import { verifyToken } from "../utils/userToken";
import { deleteUser, getAllUsers, insertNewUser, registerNewUser, updateUser } from "../dao/userDAO";
import User from "../models/User";
import { deleteMovie, getAllMovies, searchMovies, updateMovie } from "../dao/movieDAO";
import { fetchUserReviewList, processRating } from "../dao/ratingDAO";

const apiRouter = express.Router()

apiRouter.get('/admin/get_all_users',verifyToken, getUsersService);
apiRouter.post('/admin/create_user', verifyToken, adminCreateNewUser);
apiRouter.put('/admin/update_user/:user_id', verifyToken, adminUpdateUser);
apiRouter.delete('/admin/delete_user/:user_id', verifyToken, adminDeleteUser);
apiRouter.put('/api/admin/update_movie', verifyToken, adminUpdateMovie);
apiRouter.delete('/api/admin/delete_movie/:movie_id', verifyToken, adminDeleteMovie);

apiRouter.get('/api/movies', verifyToken,getMovies);
apiRouter.post('/api/movies/post_evaluation', verifyToken, handleEvaluation);

apiRouter.get('/api/get_user_ratings', verifyToken, getUserReviews);


async function adminDeleteMovie(req:Request, res:Response){
    try{
        const id = Number(req.params.movie_id);
        const operation = await deleteMovie(id);
        if (operation){
            console.log("filme deletado.")
            res.status(200).json({message:"filme deletado"});
        }else{
            console.log("erro ao deletar filme")
            res.status(500).json({error:"erro ao deletar filme"});
        }
    }catch(error){
        console.error("adminDeleteMovie: error: erro ao deletar usuario");
        res.status(500).json({error:"Internal server error."});
    }
}

async function getUserReviews(req:Request, res:Response){
    try{
        const userId = req.user.userId;
        const ratingList = await fetchUserReviewList(userId);
        if (ratingList == null){
            res.status(400).json({error:"Failed to get all battles from user"});
        }else{
            res.status(200).json({ratingList:ratingList});
        }

    }catch(error){
        console.error("erro ao buscar ratings do usuario");
        res.status(500).json({error: 'erro ao buscar ratings do usuario'});
    }
}

async function adminUpdateMovie(req:Request, res:Response){
    try{
        const {id, title, director, year, poster} = req.body;
        const operation = await updateMovie(id, title, director, year, poster);
        if(operation){
            res.status(200).json({message:"filme atualizado"});
        }else{
            res.status(400).json({error:"filme não pode ser atualizado"});
        }
    }catch(error){
        res.status(500).json({error:"erro inesperado ao atualizar filme"});
    }
}

async function getMovies(req:Request, res:Response) {
    try{

        const search = req.query.search as String;
        
        if (!search){
            const movieList = await getAllMovies();
            if (movieList == null){
                res.status(400).json({error:"Failed to get all movies from database"});
            }else{
                res.status(200).json({movieList:movieList});
            }
        }else if (search.length < 3){
            res.status(400).json({message: "A pesquisa deve ter pelo menos 3 caracteres." });
        }else{
            const searchResult = await searchMovies(search);
            res.status(200).json({movieList: searchResult})
        }

    }catch(error){
        console.error("Erro ao buscar filmes:", error);
        res.status(500).json({ message: "Erro interno do servidor." });
    }
}

async function handleEvaluation(req:Request, res:Response){
    try {
        const {movieId, evaluation} = req.body;
        const userId = req.user.userId;
        const operation = await processRating(userId, movieId, evaluation);
        if(operation){
            res.status(200).json({message:"avaliação registrada"});
        }else{
            res.status(500).json({error:"operation retornoou false"});
        }
    } catch (error) {
        console.error("Error when handling evaluaton");
        res.status(500).json({error:"Internal server error."});
    }
}

async function getUsersService(req:Request, res:Response){
    try{
        const userList = await getAllUsers();
        if (userList == null){
            res.status(400).json({error:"Failed to get all battles from user"});
        }else{
            res.status(200).json({allUsers:userList});
        }
    }catch(error){
        console.error("Error when fetching all users from database.");
        res.status(500).json({error:"Internal server error."});
    }
}

async function adminCreateNewUser(req:Request, res:Response){
    try{
        const {username, password, permission} = req.body;

        if (!username || !password || !permission){
            res.status(400).json({error:"Todos os campos são necessários"})
        }

        const success = await insertNewUser(username, password, permission);
        if (success) {
            console.log("registered new user.")
            res.status(200).json({message:"user registered"});
        }else{
            res.status(500).json({error:"Server error. Please try again later."});
        }

    }catch(error){
        console.error("Error when creating new user");
        res.status(500).json({error:"Internal server error."});
    }
}

async function adminUpdateUser(req:Request, res:Response){
    try{
        const params = req.params.user_id;
        console.log("req.params = ", params);
        console.log("req.body: ", req.body);
        const {id, username, password, permission} = req.body.user;
        const user = new User(Number(params), username, password, permission);
        console.log(user);

        const success = await updateUser(user);
        if (success) {
            console.log("usuário atualizado.")
            res.status(200).json({message:"usuario atualizado"});
        }else{
            res.status(500).json({error:"erro ao atualizar o usuário"});
        }


    }catch(error){
        console.error("adminUpdateUser: Error when updating user");
        res.status(500).json({error:"Internal server error."});
    }
}

async function adminDeleteUser(req:Request, res:Response){
    try{
        const id = Number(req.params.user_id);
        const operation = await deleteUser(id);

        if (operation){
            console.log("usuário deletado.")
            res.status(200).json({message:"usuario deletado"});
        }else{
            console.log("erro ao deletar usuário")
            res.status(500).json({error:"erro ao atualizar o usuário"});
        }

    }catch(error){
        console.error("adminDeleteUser: error: erro ao deletar usuario");
        res.status(500).json({error:"Internal server error."});
    }
}

export default apiRouter;