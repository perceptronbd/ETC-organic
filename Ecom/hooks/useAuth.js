import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { getUserDetails } from "../api/user/authUser";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        AsyncStorage.getItem("user-token").then((token) => {
          if (token) {
            getUserDetails(token).then((res) => {
              const { data, status } = res;
              if (status === 500) {
                AsyncStorage.getItem("user-data").then((value) => {
                  if (value) {
                    setUser(JSON.parse(value));
                  }
                });
              } else {
                AsyncStorage.mergeItem("user-data", JSON.stringify(data)).then(
                  AsyncStorage.getItem("user-data").then((value) => {
                    if (value) {
                      setUser(JSON.parse(value));
                    }
                  }),
                );
              }
            });
          }
        });
        setLoading(false);
      } catch (e) {
        console.log("error:", e);
      }
    };
    getData();
  }, []);

  return { user, loading };
};
