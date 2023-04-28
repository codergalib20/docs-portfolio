// pages/api/db.ts

import mongoose from "mongoose";
const mongoURI = `mongodb+srv://DOCUMENT_PORTFOLIO:w0JzhpLVtT2Z74QF@cluster0.wug6c.mongodb.net/DOCUMENT_PORTFOLIO`
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
