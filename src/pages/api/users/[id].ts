import User from "@/models/User";
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other properties that you want to include in the user object
}

// Replace this with your own function to retrieve user data by ID from a database or other data source
const getUserById = async (id: string): Promise<User | any> => {
  // ...
};

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { id } = req.query;

    if (typeof id !== "string") {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    const user = await User.findOne({ _id: id }).exec();

    if (!user) {
      return res.status(404).json({ message: `User with ID ${id} not found` });
    }

    const { name, email, _id } = user || {};

    return res.status(200).json({ name, email, _id });
  } catch (err) {
    res.status(200).send("Server error");
  }
}
