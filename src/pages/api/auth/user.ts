import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";
// import User from "";

import { check, validationResult } from "express-validator";
const jwtSecret = "your-jwt-secret-key";

const registerValidationRules = [
  check("name", "Name is required").notEmpty(),
  check("email", "Email is required").notEmpty(),
  check("email", "Email is not valid").isEmail(),
  check("password", "Password is required").notEmpty(),
  check("password", "Password must be at least 6 characters long").isLength({
    min: 6,
  }),
];

const loginValidationRules = [
  check("email", "Email is required").notEmpty(),
  check("email", "Email is not valid").isEmail(),
  check("password", "Password is required").notEmpty(),
];

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // Validate the login request body
    await Promise.all(loginValidationRules.map((rule) => rule.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if user with the email exists in the database
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid email or password" }] });
      }

      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid email or password" }] });
      }

      // Sign a JWT token and set it as an HttpOnly cookie
      const token = jwt.sign({ sub: user.email }, jwtSecret);
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
        })
      );
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: [{ msg: "Internal server error" }] });
    }
  } else {
    res.status(405).json({ errors: [{ msg: "Method not allowed" }] });
  }
}
