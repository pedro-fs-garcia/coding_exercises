import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter';
import apiRouter from './routes/apiRouter';

const app = express()

app.use(cors({
  origin: "http://localhost:5173", // Altere para o domínio do frontend em produção
  credentials: true //permite envio de cookies
}));

app.use(cookieParser());

app.use(bodyParser.json());

app.use(userRouter);
app.use(apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});