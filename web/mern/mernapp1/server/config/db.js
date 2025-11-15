import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    if (db) {
      console.log(`Database is connected: ${db.connection.host}`);
    } else {
      console.log(`Database isn't connected`);
    }
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
