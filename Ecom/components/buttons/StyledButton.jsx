import { StyledComponent } from "nativewind";
import React from "react";
import { Text } from "react-native-paper";
import COLOR from "../../constants/COLOR";
import { Pressable, View } from "react-native";

export const StyledButton = ({ children, ...props }) => {
  const { variant, className, ...rest } = props;

  return (
    <View style={{ borderRadius: 10, overflow: "hidden" }}>
      <StyledComponent
        component={Pressable}
        tw={`w-64 h-12 justify-center items-center ${className}`}
        style={{
          backgroundColor: variant === "secondary" ? "" : COLOR.secondary,
          borderColor: COLOR.secondary,
          borderRadius: 10,
          borderWidth: 1,
        }}
        android_ripple={{
          color: COLOR.tertiary,
        }}
        {...rest}
      >
        <StyledComponent
          component={Text}
          style={{
            color: variant === "secondary" ? COLOR.secondary : COLOR.foreground,
          }}
        >
          {children}
        </StyledComponent>
      </StyledComponent>
    </View>
  );
};
