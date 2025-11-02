// express, nodemon, dotenv, mongoose, cors
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Note from './models/notesModel.js';

dotenv.config();
// 3000, 5000, 7000, 8000, 8080
const PORT =  5000;

const app = express();
// middleware
app.use(express.json())

app.get('/notes', async (req, res) => {
  const notes = await Note.find({});
  if (notes.length === 0) return res.send({status: false, message: "No notes added yet"})

  return res.send({status: true, data: notes})
})

app.get('/', (req, res) => {

  const roles = [
    { name: "Super Admin" },
    { name: "Vendor" },
    { name: "User" }
  ]

  return res.send({status: true, data: roles})
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
  })
})