import { authURL } from "../instances/authURL";

export const fetchProducts = async (token) => {
  try {
    const res = await authURL(token).get("/get-products");
    console.log("=======fetchProducts response=======");
    console.log(res);
    return res;
  } catch (error) {
    console.log("=======fetchProducts error=======");
    console.log(error);
    const errorResponse = error.response;
    return errorResponse;
  }
};
