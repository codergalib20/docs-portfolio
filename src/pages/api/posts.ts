import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      return res.status(200).json({ hello: "hello" });
    default:
      return res.status(404).json({ message: "this is an error message" });
  }
};

export default handler;
