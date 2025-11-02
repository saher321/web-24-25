// express, dotenv, mongoose, cors, nodemon, jsonwebtoken
import express from 'express';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';
import notesRoute from './routes/notesRoute.js';
dotenv.config();

// 3000, 5000, 7000, 8000, 8080
const PORT =  process.env.PORT || 5000;
const PREFIX = '/api/v1';
// middleware
const app = express();
app.use(cors());
app.use(express.json());

app.use(PREFIX, notesRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running http://localhost:${PORT}/`);
  });
});
