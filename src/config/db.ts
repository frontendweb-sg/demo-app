import mongoose, { mongo } from "mongoose";

const db_url = process.env.DATABASE_URI!;

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(db_url);
    console.log("Database connected!");
  } catch (error) {
    console.log("error", error);
  }
};

export { connectDb };
