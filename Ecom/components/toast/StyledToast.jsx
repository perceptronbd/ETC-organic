import { MaterialIcons } from "@expo/vector-icons";
import { useToast } from "native-base";
import React from "react";
import { Pressable, View } from "react-native";
import tailwind, { style } from "twrnc";
import { StyledText } from "../texts/StyledText";

export const StyledToast = ({ children, title, description, variant }) => {
  const toast = useToast();

  const showToast = () => {
    toast.show({
      render: () => (
        <Toast title={title} description={description} variant={variant} />
      ),
    });
  };

  return (
    <Pressable onPress={showToast} style={style}>
      {children}
    </Pressable>
  );
};

const Toast = ({ title, description, variant }) => {
  return (
    <View
      style={tailwind.style(
        `w-96 flex-row gap-4 items-center bg-white shadow-md rounded-md py-2 px-4`,
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
