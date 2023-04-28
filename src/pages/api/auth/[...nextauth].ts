import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectDB from "../db";
import { NextApiRequest, NextApiResponse } from "next";

connectDB();

const options = {
  // ...
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options as any);
