import express from 'express';
import {Request, Response} from "express";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import { dbConnection } from "../services/database";
import { User } from '../models/models';
import { authenticateToken } from '../controllers/authController';

dotenv.config();

const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const router = express.Router();

const handleRegister = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
  
    try {
      const [rows] = await dbConnection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password]);
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to register user.' });
    }
  };


  const handleLogin = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    try {
        const [rows]: any = await dbConnection.query('SELECT * FROM users WHERE email = ?', [email]);

        if (rows.length === 0 || rows[0].password !== password) {
            res.status(401).json({ error: "Invalid credentials" });
            return;
        }

        const user = rows[0];
        const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ error: "Failed to log in" });
    }
};

const getUserProfile = (req: Request, res: Response): void => {
  try {
      const userId = req.user?.id; // Exemplo: supondo que você adicionou um middleware para autenticação
      if (!userId) {
          res.status(401).json({ error: 'Unauthorized' });
          return;
      }

      // Lógica para buscar os dados do usuário
      const userProfile = { id: userId, name: 'John Doe' }; // Exemplo
      res.status(200).json(userProfile);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};


router.post('/login', handleLogin);
router.post('/register', handleRegister);
router.get('/dashboard', authenticateToken, getUserProfile)

export default router;