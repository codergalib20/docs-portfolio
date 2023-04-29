import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { getUserById } from "@/utils/database";
// import { getUserById } from "@/"; // Import a function to retrieve the user data from a database

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other properties that you want to include in the user object
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_SECRET: string;
    }
  }
}

export const withAuth =
  (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) =>
  async (
    req: NextApiRequest & { user?: User }, // Add User type to `user` property
    res: NextApiResponse
  ) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is required" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        id: string;
      };
    //   const user = await getUserById(decoded.id); // Load the complete user data from a database
      req.user = decoded as User;
      await handler(req, res);
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
