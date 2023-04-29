import { NextApiRequest, NextApiResponse } from 'next';
import { withAuth } from '../middleware/withAuth';

interface User {
  id: string;
  name: string;
  email: string;
  // Add any other properties that you want to include in the user object
}

const profileHandler = async (req: NextApiRequest & { user?: User }, res: NextApiResponse) => {
  // Access complete user object from `req` if authenticated
  if (req.user) {
    return res.status(200).json(req.user);
  }

  // If not authenticated, return error message
  return res.status(401).json({ message: 'User is not logged in' });
};

export default withAuth(profileHandler);
