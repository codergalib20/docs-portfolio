import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

interface User {
  id: string;
  name: string;
  email: string;
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
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as User;
      req.user = decoded;
      await handler(req, res);
    } catch (err) {
      res.status(401).json({ message: "Invalid token" });
    }
  };
