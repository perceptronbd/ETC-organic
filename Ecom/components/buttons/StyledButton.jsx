import React from "react";
import { Button } from "react-native-paper";
import tw from "twrnc";
import COLOR from "../../constants/COLOR";

export const StyledButton = ({ children, ...props }) => {
  const { style, contentStyle, ...rest } = props;

  return (
    <Button
      buttonColor={COLOR.secondary}
      style={tw.style("rounded-xl  mt-2", style)}
      contentStyle={tw.style(`py-1 w-64`, contentStyle)}
      textColor={"white"}
      rippleColor={COLOR.tertiary}
      onPress={() => console.log("Pressed")}
      {...rest}
    >
      {children}
    </Button>
  );
};
