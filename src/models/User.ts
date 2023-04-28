import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>("User", userSchema);

export default User;
