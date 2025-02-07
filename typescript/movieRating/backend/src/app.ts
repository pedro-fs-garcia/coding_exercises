import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRouter from './routers/authRouter';
import apiRouter from './routers/apiRouter';

dotenv.config()

const app = express()

app.use(cors({
    origin: process.env.FRONTEND_SERVER, // Altere para o domínio do frontend em produção
    credentials: true //permite envio de cookies
}));

app.use(bodyParser.json());

app.use(authRouter);
app.use(apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
