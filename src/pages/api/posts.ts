import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

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
  const dirs = fs.readdirSync(dirPathToRead);
  const data = dirs.map((filename) => {
    const filePathToRead = path.join(process.cwd(), "src/posts/" + filename);
    const fileContent = fs.readFileSync(filePathToRead, { encoding: "utf-8" });
    return matter(fileContent).data;
  });
  return data;
};

export default handler;
