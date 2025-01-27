import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import loginRoutes from './routes/loginRoutes';
import movieRoutes from './routes/moviesRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(loginRoutes);
app.use(movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});