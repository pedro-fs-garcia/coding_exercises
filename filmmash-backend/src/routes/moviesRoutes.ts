import express from 'express';
import {Request, Response} from "express";
import { dbConnection } from "../services/database";
import { getNewArena } from '../dao/movieDAO';
import { Arena } from '../models/models';

const moviesRouter = express.Router();


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
    const { arena } = req.body;

    if (!arena) {
        res.status(400).json({ error: "Arena object is missing." });
        return;
    }

    try {
        // Extraindo os dados do objeto 'arena'
        const { movie1, movie2, winner } = arena;

        // Exemplo: Lógica para salvar a vitória no banco de dados (se necessário)
        console.log("Movie 1:", movie1);
        console.log("Movie 2:", movie2);
        console.log("Winner:", winner);

        // Respondendo ao cliente
        res.status(201).json({ message: "Winner registered successfully.", arena });
    } catch (error) {
        console.error("Error processing winner:", error);
        res.status(500).json({ error: "Failed to process winner." });
    }
};


moviesRouter.get("/get_arena_json", getArenaJson)
moviesRouter.post("/post_winner", postWinner)
moviesRouter.get("/get_all_ratings")


export default moviesRouter;
// router.post('/login', handleLogin);
// router.post('/register', handleRegister);