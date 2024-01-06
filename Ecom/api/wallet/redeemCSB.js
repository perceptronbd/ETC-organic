import AsyncStorage from "@react-native-async-storage/async-storage";
import { authURL } from "../instances/authURL";

export const redeemCSB = async () => {
  console.log("=======redeemCSB API=======");
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).post("/redeemCSB");
    console.log("...redeemCSB api response:", res);
    return res;
  } catch (error) {
    console.log("...redeemCSB api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};
