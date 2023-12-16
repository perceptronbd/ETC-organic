import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import tailwind from "twrnc";
import { StyledText } from "../../components";

export default function referEarn() {
  return (
    <View style={tailwind`flex-1 p-4`}>
      <Pressable
        onPress={() => {
          console.log("referEarn route");
          router.replace("/(tabs)/home");
        }}
      >
        <StyledText>Refer and Earn</StyledText>
      </Pressable>
      <Text>referEarn</Text>
    </View>
  );
}
