import React from "react";
import { View } from "react-native";
import { StyledText } from "../../../components";

export default function index() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledText>ইন্ডেক্স </StyledText>
      </View>
    </>
  );
}
