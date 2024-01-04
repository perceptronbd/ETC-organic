import AsyncStorage from "@react-native-async-storage/async-storage";
import { authURL } from "../instances/authURL";

export const placeOrder = async (data) => {
  console.log("=======placeOrder API=======");
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).post("//place-order", data);
    console.log("...placeOrder api response:", res);
    return res;
  } catch (error) {
    console.log("...placeOrder api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};

export const getOrderDetails = async () => {
  console.log("=======getOrderDetails API=======");
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).get("/get-user-order-details");
    console.log("...getOrderDetails api response:", res);
    return res;
  } catch (error) {
    console.log("...getOrderDetails api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};
