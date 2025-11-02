import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Database is connecting...")
    const db = await mongoose.connect(process.env.MONGODB_LIVE)
    if (db) {
      console.log(`Database is connected: ${db.connection.host}`)
    } else {
      console.log(`Failed to connect database`)
    }
  } catch (error) {
    console.log("Something went wrong: ", error)
  }
}