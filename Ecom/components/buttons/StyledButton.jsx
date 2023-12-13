import React from "react";
import { Button } from "react-native-paper";
import tw from "twrnc";
import COLOR from "../../constants/COLOR";

export const StyledButton = ({ children, ...props }) => {
  const { style, contentStyle, variant, ...rest } = props;

  return (
    <Button
      buttonColor={variant === "outline" ? null : COLOR.secondary}
      style={tw.style(
        "mt-2 h-10 items-center justify-center rounded-xl",
        style,
        {
          "border border-black": variant === "outline",
        },
      )}
      contentStyle={tw.style(`w-96`, contentStyle)}
      textColor={variant === "outline" ? "black" : "white"}
      maxFontSizeMultiplier={1}
      rippleColor={COLOR.tertiary}
      {...rest}
    >
      {children}
    </Button>
  );
};
