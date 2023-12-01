import React from "react";
import { Button } from "react-native-paper";
import COLOR from "../../constants/COLOR";

export const StyledButton = ({ children, ...props }) => {
  const { variant, style, contentStyle, ...rest } = props;

  return (
    <Button
      buttonColor={COLOR.secondary}
      style={{
        margin: 8,
        borderRadius: 10,
        ...style,
      }}
      contentStyle={{
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        ...contentStyle,
      }}
      textColor={"white"}
      rippleColor={COLOR.tertiary}
      onPress={() => console.log("Pressed")}
      {...rest}
    >
      {children}
    </Button>
  );
};
