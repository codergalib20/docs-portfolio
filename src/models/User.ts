import mongoose, { Schema, Document } from "mongoose";

interface User extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model<User>("User", UserSchema);

export default User;
