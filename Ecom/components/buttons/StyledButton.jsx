import React from "react";
import { Button } from "react-native-paper";
import tw from "twrnc";
import COLOR from "../../constants/COLOR";

export const StyledButton = ({ children, ...props }) => {
  const { style, contentStyle, ...rest } = props;

  return (
    <Button
      buttonColor={COLOR.secondary}
      style={tw.style("mt-2  h-10  rounded-xl", style)}
      contentStyle={tw.style(`h-10 w-64`, contentStyle)}
      textColor={"white"}
      maxFontSizeMultiplier={1}
      rippleColor={COLOR.tertiary}
      {...rest}
    >
      {children}
    </Button>
  );
};
