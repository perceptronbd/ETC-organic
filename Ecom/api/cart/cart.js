import AsyncStorage from "@react-native-async-storage/async-storage";
import { authURL } from "../instances/authURL";

export const addToCart = async (productId, quantity) => {
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).post("/add-to-cart", {
      productId,
      quantity,
    });
    console.log("=======addToCart response=======");
    console.log(res);
    return res;
  } catch (error) {
    console.log("=======addToCart error=======");
    console.log(error);
    const errorResponse = error.response;
    return errorResponse;
  }
};

export const getCartDetails = async () => {
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).get("/get-cart-details");
    console.log("=======getCartDetails response=======");
    console.log(res);
    return res;
  } catch (error) {
    console.log("=======getCartDetails error=======");
    console.log(error);
    const errorResponse = error.response;
    return errorResponse;
  }
};
