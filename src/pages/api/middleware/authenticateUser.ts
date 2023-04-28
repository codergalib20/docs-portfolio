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

export async function authenticateUser(req: NextApiRequest, res: NextApiResponse, next: () => void) {
    
}
