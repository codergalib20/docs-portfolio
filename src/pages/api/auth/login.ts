import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../models/User";

interface LoginRequestBody {
  email: string;
  password: string;
}

interface LoginResponseBody {
  token: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponseBody | string>
) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { email, password } = req.body as LoginRequestBody;

  try {
    if (!email || !password) {
      return res.status(401).send("All fields are required");
    }
    // Find the user with the specified email
    let user = await User.findOne({ email });

    if (!user) {
      res.status(401).send("Invalid email or password");
      return;
    }

    // Verify the password against the user's hashed password
    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      res.status(401).send("Invalid email or password");
      return;
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}
