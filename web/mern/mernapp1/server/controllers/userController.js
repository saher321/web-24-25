// forgot password :: nodemailer, nanoid 
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import { generateOTP } from "../utils/generateOTP.js";
import { sendEmail } from "../utils/sendEmail.js";

export const signup = async (req, res) => {
  const data = req.body;
  if (!data.name) return res.send({status: false, message: "Name fields is required"});
  if (!data.email) return res.send({status: false, message: "Email fields is required"});
  if (!data.password) return res.send({status: false, message: "Password fields is required"});

  try {
    let user = await User.findOne({email: data.email});
    if (user) return res.send({status: false, message: "User exist with this email"});

    // encrypting password
    // 12345 :: bcryptjs => $dndwoqdh238ydh23/d23d32d2
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    user = {
      name: data.name,
      email: data.email,
      password: hashedPassword,
    }

    const result = await User.create(user);
    if (result) {
      return res.send({status: true, message: "Account has been created"})
    } else {
      return res.send({status: false, message: "Failed to create account"})
    }

  } catch (error) {
    console.log("Error: ", error);
  }
}

export const login = async (req, res) => {
  const data = req.body;
  if (!data.email) return res.send({status: false, message: "Email fields is required"});
  if (!data.password) return res.send({status: false, message: "Password fields is required"});

  try {
    const user = await User.findOne({email: data.email});
    
    if (!user) return res.send({status: false, message: "User isn't exist with this email"});

    const isMatched = await bcrypt.compare(data.password, user.password)
    if (!isMatched) return res.send({status: false, message: "Wrong password"});

    const token = jwt.sign({
      userID: user._id,
      userEmail: user.email,
    }, process.env.JWT_SECRET, { expiresIn: "7d"});

    if (token) {
      return res.send({status: true, message: "Loggedin successfull", userToken: token});
    } else {
      return res.send({status: false, message: "Failed to create session"});
    }

  } catch (error) {
    console.log("Error: ", error);    
  }
}

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if ( !email ) return res.send({status: false, message: "Please enter registered email"});
  try {
    let user = await User.findOne({email});
    if ( !user ) return res.send({status: false, message: "User not found with this email"});

    const otp = generateOTP();

    const content = `
    Hi ${user.name}, Here is your request OTP code.
    <h1>${otp}</h1>
    <small>Note: Please don't share this one time password (OTP) to anyone</small>
    `
    
    user.otp = otp;
    user.isVerified = false;
    const ok = await user.save();

    if (ok) {
      sendEmail(user.email, "Reset password OTP code", content);
      return res.send({status: true, message: "Check your email for reset password"})
    } else {
      return res.send({status: false, message: "Failed to send email"})
    }


  } catch (error) {
    console.log("Error: ", error)
  }
}

export const verifyOTP = async (req, res) => {}

export const resetPassword = async (req, res) => {}
