import { Stack } from "expo-router";
import React from "react";
import { View } from "react-native";
import { StyledText } from "../../../components";

export default function index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          title: "My home",

          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
        }}
      />
      <StyledText>Index</StyledText>
    </View>
  );
}
