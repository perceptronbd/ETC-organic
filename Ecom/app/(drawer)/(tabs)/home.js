import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";
import {
  Carousel,
  Category,
  Favorite,
  StyledButton,
} from "../../../components";
import { favoriteProduct } from "../../../constants/mockData";
import { useCustomToast } from "../../../hooks";

export default function Page() {
  const showToast = useCustomToast();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("user-data");
        const userData = JSON.parse(value);
        if (userData !== null) {
          console.log("home userData", userData);
        }
      } catch (e) {
        console.log("error:", e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <ScrollView style={tw`flex-1 p-2`}>
        <View style={tw.style(`w-full items-center`, {})}>
          <Carousel />

          <StyledButton
            height={"md"}
            onPress={() =>
              showToast({ description: "world", variant: "warning" })
            }
          >
            Book Now
          </StyledButton>
        </View>
        {/* Categories */}
        <Favorite products={favoriteProduct} />
        <Category products={favoriteProduct} />
      </ScrollView>
    </>
  );
}
