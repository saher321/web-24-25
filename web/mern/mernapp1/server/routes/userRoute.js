import express from 'express'
import { signup, login, forgotPassword, resetPassword } from '../controllers/userController.js';
import User from '../models/userModel.js';

const userRoute = express.Router();

// http://localhost:5000/api/v1/
userRoute.get('/users', async (req, res) => {
  const users = await User.find();
  return res.send({status: true, users})
})
userRoute.post('/auth/signup', signup)
userRoute.post('/auth/login', login)
userRoute.post('/auth/forgot-password', forgotPassword)
userRoute.post('/auth/reset-password', resetPassword)


export default userRoute