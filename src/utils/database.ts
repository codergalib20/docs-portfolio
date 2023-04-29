import { User } from "../types/utils";

export const getUserById = async (id: string): Promise<User | null> => {
  try {
    const response = await fetch(`/api/users/${id}`); // Replace this with your own API endpoint to retrieve user data
    const user = await response.json();
    return user;
  } catch (err) {
    console.error(err);
    return null;
  }
};
