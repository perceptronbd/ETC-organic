import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, View } from "react-native";
import tailwind from "twrnc";
import { StyledText } from "../texts/StyledText";

export const StyledToast = ({ title, description, variant }) => {
  const { width } = Dimensions.get("window");

  console.log(width);

  return (
    <View
      style={tailwind.style(
        `flex-row gap-4 items-center bg-white shadow-md rounded-md py-2 px-4`,
        {
          width: width - 32,
        },
        {
          "border-l-2 border-r-2 border-green-500": variant === "success",
          "border-l-2 border-r-2 border-yellow-500": variant === "warning",
          "border-l-2 border-r-2 border-red-500": variant === "danger",
        },
      )}
    >
      {variant === "success" && (
        <MaterialIcons
          name="done"
          size={24}
          style={tailwind.style(
            `text-green-500 border-2 w-8 h-8 border-green-500 rounded-full p-1`,
          )}
        />
      )}
      {variant === "warning" && (
        <MaterialIcons
          name="warning"
          size={24}
          style={tailwind.style(`text-yellow-500 w-8 h-8 rounded-full p-1`)}
        />
      )}
      {variant === "danger" && (
        <MaterialIcons
          name="dangerous"
          size={26}
          style={tailwind.style(`text-red-500 w-8 h-8  rounded-full p-1`, {})}
        />
      )}
      <View style={tailwind.style(`flex mr-2`, {})}>
        {title && (
          <StyledText variant="titleMedium" type="m">
            {title}
          </StyledText>
        )}
        <StyledText variant="bodyMedium">{description}</StyledText>
      </View>
    </View>
  );
};
