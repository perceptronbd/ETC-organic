import React from "react";
import { View } from "react-native";
import { IconButton, Text } from "react-native-paper";
import tailwind from "twrnc";
import COLOR from "../../constants/COLOR";

export const Counter = ({ value, setValue }) => {
  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    if (value > 0) {
      setValue((prev) => prev - 1);
    }
  };

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <IconButton
        icon={"minus"}
        iconColor="white"
        size={15}
        style={tailwind`bg-[${COLOR.tertiary}]`}
        onPress={decrement}
      />
      <Text variant="titleLarge" style={{ marginHorizontal: 10 }}>
        {value}
      </Text>
      <IconButton
        icon={"plus"}
        iconColor="white"
        size={15}
        style={tailwind`bg-[${COLOR.tertiary}]`}
        onPress={increment}
      />
    </View>
  );
};
