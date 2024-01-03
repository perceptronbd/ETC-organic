import { authURL } from "../instances/authURL";

export const fetchProducts = async (token) => {
  console.log("fetchProducts...");
  try {
    const res = await authURL(token).get("/get-products");
    console.log("response:", res);
    return res;
  } catch (error) {
    console.log("error:", error.response);
    const errorResponse = error.response;
    return errorResponse;
  }
};
