import AsyncStorage from "@react-native-async-storage/async-storage";
import { authURL } from "../instances/authURL";

export const addBankAccount = async (data) => {
  console.log("=======addBankAccount API=======");
  console.log("...addBankAccount api data:", data);
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).post("/addBank", data);
    console.log("...addBankAccount api response:", res);
    return res;
  } catch (error) {
    console.log("...addBankAccount api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};

export const getBankAccounts = async () => {
  console.log("=======getBankAccounts API=======");
  try {
    const token = await AsyncStorage.getItem("user-token");
    const res = await authURL(token).get("/getBank");
    console.log("...getBankAccounts api response:", res);
    return res;
  } catch (error) {
    console.log("...getBankAccounts api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};

export const deleteBankAccount = async (bankId) => {
  console.log("=======deleteBankAccount API=======");
  console.log("...deleteBankAccount api data:", bankId);
  try {
    const token = await AsyncStorage.getItem("user-token");
    // Pass the bankId within the `data` property of the config object
    const res = await authURL(token).delete("/deleteBank", {
      data: { bankId: bankId },
    });
    console.log("...deleteBankAccount api response:", res);
    return res;
  } catch (error) {
    console.log("...deleteBankAccount api error:", error);
    const errorResponse = error.response;
    return errorResponse;
  }
};
