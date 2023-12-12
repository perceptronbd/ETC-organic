import React from "react";
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

export default function index() {
  const showToast = useCustomToast();

  return (
    <>
      <ScrollView style={tw`flex-1 p-2`}>
        <View style={tw.style(`items-center`, {})}>
          <Carousel />

          <StyledButton
            style={tw`rounded-full`}
            contentStyle={tw`w-96`}
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
