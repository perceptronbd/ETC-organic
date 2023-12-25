import { baseURL } from "../instances/baseURL";

export const registerUser = async (user) => {
  const res = await baseURL.post("/register", user);
  console.log(res.data);
  return res.data;
};
