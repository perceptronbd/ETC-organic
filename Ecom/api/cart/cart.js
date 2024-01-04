import AsyncStorage from "@react-native-async-storage/async-storage";
import { authURL } from "../instances/authURL";

export const addToCart = async (productId, quantity) => {
  console.log("=======addToCart API=======");
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).post("/add-to-cart", {
      productId,
      quantity,
    });
    console.log("...addToCart api response:", res);
    return res;
  } catch (error) {
    console.log("...addToCart api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};

export const getCartDetails = async () => {
  console.log("=======getCartDetails API=======");
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).get("/get-cart-details");
    console.log("...getCartDetails api response:", res);
    return res;
  } catch (error) {
    console.log("...getCartDetails api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};
