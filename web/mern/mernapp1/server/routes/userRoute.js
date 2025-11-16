import express from 'express'
import { signup, login, forgotPassword, verifyOTP, resetPassword } from '../controllers/userController.js';

const userRoute = express.Router();

// http://localhost:5000/api/v1/
userRoute.post('/auth/signup', signup)
userRoute.post('/auth/login', login)
userRoute.post('/auth/forgot-password', forgotPassword)
userRoute.post('/auth/verify-otp', verifyOTP)
userRoute.post('/auth/reset-password', resetPassword)

export default userRoute