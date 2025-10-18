// express, dotenv, cors, nodemon, jsonwebtoken
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// 3000, 5000, 7000, 8000, 8080
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}/`);
});

app.get('/', (req, res) => {
  res.send({ name: 'Murtaza', email: 'mu87683@gmail.com' });
});
// assignment:: Products: id, title, shortDescription, price, rating(4,5,2), productCategory
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
