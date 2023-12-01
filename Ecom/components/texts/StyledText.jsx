import { Text } from "react-native-paper";
import React from "react";

export function StyledText({
  children,
  style,
  variant = "bodyMedium",
  type = "regular",
}) {
  return (
    <Text
      variant={variant}
      style={{
        fontFamily: type === "b" ? "mon-b" : type === "m" ? "mon-m" : "mon",
        ...style,
      }}
    >
      {children}
    </Text>
  );
}
