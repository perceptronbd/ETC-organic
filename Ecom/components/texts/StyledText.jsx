import { Text } from "react-native-paper";
import React from "react";
import { StyledComponent } from "nativewind";

export function StyledText({
  children,
  className,
  variant = "bodyMedium",
  type = "regular",
}) {
  return (
    <StyledComponent
      component={Text}
      variant={variant}
      style={{
        fontFamily: type === "b" ? "mon-b" : type === "m" ? "mon-m" : "mon",
      }}
      tw={`${className}`}
    >
      {children}
    </StyledComponent>
  );
}
