import AsyncStorage from "@react-native-async-storage/async-storage";
import { authURL } from "../instances/authURL";

export const withdraw = async (data) => {
  console.log("=======withdraw API=======");
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).post("/withdraw", data);
    console.log("...withdraw api response:", res);
    return res;
  } catch (error) {
    console.log("...withdraw api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};
