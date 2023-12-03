import React from "react";
import { View } from "react-native";
import tw from "twrnc";
import { Carousel, StyledButton, StyledText } from "../../../components";

export default function index() {
  return (
    <>
      <View style={tw`flex-1`}>
        <View style={tw.style(`items-center h-fit`, {})}>
          <Carousel />
          <StyledButton
            style={tw`rounded-full justify-center items-center w-[95%]`}
          >
            Book Now
          </StyledButton>
        </View>
        <StyledText>Home</StyledText>
      </View>
    </>
  );
}
