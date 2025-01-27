import {Request, Response} from "express";
import { dbConnection } from "../services/database";


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


export {handleLogin, handleRegister};