import React from "react";
import { Text } from "react-native-paper";
import COLOR from "../../constants/COLOR";
import { Pressable, View } from "react-native";

export const StyledButton = ({ children, ...props }) => {
  const { variant, style, ...rest } = props;

  return (
    <View style={{ borderRadius: 10, overflow: "hidden" }}>
      <Pressable
        style={{
          width: 200,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: variant === "secondary" ? "" : COLOR.secondary,
          borderColor: COLOR.secondary,
          borderRadius: 10,
          borderWidth: 1,
          margin: 10,
          ...style,
        }}
        android_ripple={{
          color: COLOR.tertiary,
        }}
        {...rest}
      >
        <Text
          style={{
            color: variant === "secondary" ? COLOR.secondary : COLOR.foreground,
          }}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
};
