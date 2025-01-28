import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRouter from './routes/userRoutes';

const app = express()

app.use(cors());
app.use(bodyParser.json());

app.use(userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});