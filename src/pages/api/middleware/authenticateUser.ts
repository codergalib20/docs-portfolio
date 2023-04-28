import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";

interface DecodedToken {
  userId: string;
  iat: number;
  exp: number;
}

/**
 * Middleware function to check whether the user is authenticated.
 * If the user is authenticated, the authenticated user object is attached to the request object (req.user).
 * If the user is not authenticated, a 401 Unauthorized response is sent.
 */

export async function authenticateUser(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send("Unauthorizaed");
  }

  const token = authHeader.substring("Bearer ".length);

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as DecodedToken;

    const user = await User.findById(decodedToken.userId);

    if (!user) {
      return res.status(401).send("Unauthorized");
    }

    req.user = user;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).send("Unauthorized");
  }
}
