import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

//  `mongodb+srv://DOCUMENT_PORTFOLIO:w0JzhpLVtT2Z74QF@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority`;
const uri = `mongodb+srv:DOCUMENT_PORTFOLIO:w0JzhpLVtT2Z74QF@cluster0.wug6c.mongodb.net/DOCUMENT_PORTFOLIO`
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
  try{console.log('error')}
  catch(err){console.log(err)}
}


mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

