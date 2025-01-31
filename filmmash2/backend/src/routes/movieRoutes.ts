import express from 'express';
import {Request, Response} from "express";
import Arena from '../models/arena';
import { getAllMovies, updateScore } from '../dao/movieDAO';
import { getNewArena } from '../dao/arenaDAO';
import Battle from '../models/battle';
import { getBattlesByUserId, registerNewBattle } from '../dao/battleDAO';
import authenticateToken from '../middlewares/authMiddleware';

const movieRouter = express.Router();


const getArenaJson = async (req: Request, res: Response): Promise<void> => {
    try {
        const arena: Arena | null = await getNewArena();

        if (arena) {
            // Envia o JSON da arena como resposta
            res.status(200).json(arena.toJson());
        } else {
            // Responde com status 404 caso não haja arena
            res.status(404).json({ error: "Failed to create a new arena." });
        }
    } catch (error) {
        console.error("Error creating arena:", error);
        // Em caso de erro, responde com status 500
        res.status(500).json({ error: "Internal server error." });
    }
};

const postWinner = async (req: Request, res: Response): Promise<void> => {
    const { arena, battle } = req.body;

    if (!arena) {
        res.status(400).json({ error: "Arena object is missing." });
        return;
    }

    try {
        // Extraindo os dados do objeto 'arena'
        const { movie1, movie2, winner } = arena;

        let updatedArena = new Arena(movie1, movie2);
        updatedArena.winner = winner;

        const {id, winner_id, loser_id, user_id, battle_date} = battle;
        registerNewBattle(winner_id, loser_id, user_id);

        let newMovieELO = updatedArena.calculateNewScores()
        for (var m of newMovieELO){
            updateScore(m)
        }

        // Respondendo ao cliente
        res.status(201).json({ message: "Winner registered successfully.", arena });

    } catch (error) {
        console.error("Error processing winner:", error);
        res.status(500).json({ error: "Failed to process winner." });
    }
};

const getAllRatings = async (req:Request, res:Response): Promise<void> => {
    const allMovies = await getAllMovies();
    
    try{
        if (allMovies){
            res.status(200).json( {movies: allMovies});
        
        } else {
            res.status(404).json({error: "Failed to get all movies from database."})
        }

    }catch (error) {
        console.error("Error when fetching all movies from database.")
        res.status(500).json({error:"Internal server error."})
    }
}

const getUserBattles = async (req:Request, res:Response): Promise<void> => {
    const userId = req.user.id;
    console.log(`user id: ${userId}`)
    const battles = await getBattlesByUserId(userId);
    try{
        if (battles){
            res.status(200).json({userBattles:battles})
        }else{
            res.status(400).json({error:"Failed to get all battles from user"})
        }

    }catch{
        res.status(500).json({error:"internal server error."})
    }
}


movieRouter.get("/get_arena_json", authenticateToken, getArenaJson)
movieRouter.post("/post_winner", authenticateToken, postWinner)
movieRouter.get("/get_all_ratings", authenticateToken, getAllRatings)
movieRouter.get("/get_user_battles", authenticateToken, getUserBattles)


export default movieRouter;