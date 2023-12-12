import React from "react";
import { ScrollView, View } from "react-native";
import tw from "twrnc";
import {
  Carousel,
  Category,
  Favorite,
  StyledButton,
  StyledToast,
} from "../../../components";
import { favoriteProduct } from "../../../constants/mockData";

export default function index() {
  return (
    <>
      <ScrollView style={tw`flex-1 p-2`}>
        <View style={tw.style(`items-center`, {})}>
          <Carousel />
          <StyledToast
            title={"Some Random Ass Title"}
            description={"Some random ass description!"}
          >
            <StyledButton style={tw`rounded-full`} contentStyle={tw`w-96`}>
              Book Now
            </StyledButton>
          </StyledToast>
        </View>
        {/* Categories */}
        <Favorite products={favoriteProduct} />
        <Category products={favoriteProduct} />
      </ScrollView>
    </>
  );
}
