import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";
import tailwind from "twrnc";
import { StyledText } from "../components";

const productDetails = () => {
  const item = useLocalSearchParams();

  useEffect(() => {
    console.log("item", item);

    return () => {
      console.log("call API to save the data");
    };
  }, []);

  return (
    <View style={tailwind`flex-1 justify-center items-center p-4 bg-red-300`}>
      <StyledText>productDetails</StyledText>
    </View>
  );
};

export default productDetails;
