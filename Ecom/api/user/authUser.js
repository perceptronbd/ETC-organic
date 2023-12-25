import { baseURL } from "../instances/baseURL";

export const registerUser = async (user) => {
  try {
    const res = await baseURL.post("/register", user);
    console.log("registerUser res:", res);
    return res;
  } catch (error) {
    console.log("registerUser error:", error);
  }
};

export const loginUser = async (user) => {
  try {
    const res = await baseURL.post("/login", user);
    console.log("loginUser res:", res);
    return res;
  } catch (error) {
    console.log("loginUser error:", error);
  }
};
