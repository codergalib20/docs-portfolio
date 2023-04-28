import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority`;
mongoose.connect(uri);

interface UserDocument extends mongoose.Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<UserDocument>({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model<UserDocument>("User", UserSchema);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDocument[]>
) {
  const users = await User.find();
  res.status(200).json(users);
}
