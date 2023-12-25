import { baseURL } from "../instances/baseURL";

export const registerUser = async (user) => {
  try {
    const res = await baseURL.post("/register", user);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user) => {
  try {
    const res = await baseURL.post("/login", user);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
