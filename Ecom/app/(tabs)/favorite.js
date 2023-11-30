import { View, Text } from "react-native";
import React from "react";
import { StyledComponent } from "nativewind";

export default function Page() {
  return (
    <StyledComponent
      component={View}
      className="flex-1 justify-center items-center"
    >
      <Text>favorite</Text>
    </StyledComponent>
  );
}
