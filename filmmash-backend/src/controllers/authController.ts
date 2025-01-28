import {Request, Response} from "express";
import { dbConnection } from "../services/database";
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';
import { NextFunction } from "express";
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY

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


const handleLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      const [rows]: any = await dbConnection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
      if (rows.length > 0) {
        res.status(200).json({ message: 'Login successful!', user: rows[0] });
      } else {
        res.status(401).json({ error: 'Invalid credentials.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to login.' });
    }
  };

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const secretKey = process.env.JWT_SECRET || 'default_secret';
        const decoded = jwt.verify(token, secretKey);

        // Adiciona os dados do token ao objeto `req.user`
        req.user = decoded as Record<string, any>; // Ou use um tipo mais específico, se preferir
        next();
    } catch (err) {
        console.error('Invalid token:', err);
        res.status(403).json({ error: 'Invalid token.' });
    }
};

export {handleLogin, handleRegister, authenticateToken};