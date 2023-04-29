import { NextApiResponse } from "next";

export const setAuthCookie = (res: NextApiResponse, token: string) => {
  // Set the cookie in the response headers
  res.setHeader(
    "Set-Cookie",
    `authToken=${token}; HttpOnly; Path=/; Max-Age=${60 * 60 * 24 * 7}` // set cookie for 7 days
  );
};

export const removeAuthCookie = () => {
  document.cookie = `auth=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
