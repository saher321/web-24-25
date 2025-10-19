// express, dotenv, cors, nodemon, jsonwebtoken
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import Notes from './models/notesModels.js';
dotenv.config();
const app = express();

// 3000, 5000, 7000, 8000, 8080
const PORT =  5000

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running http://localhost:${PORT}/`);
});

app.get('/', (req, res) => {
  res.send({ name: 'Murtaza', email: 'mu87683@gmail.com' });
});

app.get('/notes', async (req, res) => {
  const notes = await Notes.find({});
  return res.send({status: true, notes})
})
// assignment:: 10 Products: id, title, shortDescription, price, rating(4,5,2), productCategory
const roles = [
  { id: 101, rolename: 'Super Admin' },
  { id: 102, rolename: 'Admin' },
  { id: 103, rolename: 'Vendor' },
  { id: 104, rolename: 'User' },
  { id: 105, rolename: 'Visitor' },
];
app.get('/api/roles', (req, res) => {
  res.send(roles);
});
