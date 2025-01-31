import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routes/userRoutes';
import movieRouter from './routes/movieRoutes';

const app = express()

app.use(cors({
  origin: "http://localhost:5173", // Altere para o domínio do frontend em produção
  credentials: true
}));

app.use(bodyParser.json());

app.use(userRouter);
app.use(movieRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});