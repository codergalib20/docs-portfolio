import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  console.log(__dirname);
  console.log(fs);

  switch (method) {
    case "GET": {
      const data = readPostInfo();
      console.log(data);
      return res.status(200).json({ posts: data });
    }
    default:
      return res.status(404).json({ message: "this is an error message" });
  }
};

const readPostInfo = () => {
  const dirPathToRead = path.join(process.cwd(), "src/posts");
  return fs.readdirSync(dirPathToRead);
};

export default handler;
