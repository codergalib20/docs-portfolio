import { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "../middleware/withAuth";

interface User {
  id: string;
  name: string;
  email: string;
}

const handler = async (
  req: NextApiRequest & { user?: User },
  res: NextApiResponse
) => {
  // Access user object from `req` if authenticated
  if (req.user) {
    return res.status(200).json({ message: "User is logged in" });
  }

  // If not authenticated, return error message
  return res.status(401).json({ message: "User is not logged in" });
};

export default withAuth(handler);
