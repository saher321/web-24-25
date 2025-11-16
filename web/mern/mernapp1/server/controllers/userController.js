import bcrypt from "bcryptjs";
import User from '../models/userModel.js'

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

export const login = async (req, res) => {}

export const forgotPassword = async (req, res) => {}

export const verifyOTP = async (req, res) => {}

export const resetPassword = async (req, res) => {}
