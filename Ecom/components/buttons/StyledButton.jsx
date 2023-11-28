import { StyledComponent } from "nativewind";
import React from "react";
import { Button } from "react-native-paper";
import COLOR from "../../constants/COLOR";

export const StyledButton = ({ children, ...props }) => {
  const { variant, className, ...rest } = props;

  return (
    <StyledComponent
      {...rest}
      component={Button}
      tw={`w-52 rounded-lg ${className}`}
      mode={variant === "outlined" ? "outlined" : "contained"}
      textColor={variant === "outlined" ? COLOR.secondary : COLOR.foreground}
      buttonColor={variant === "outlined" ? "" : COLOR.secondary}
      rippleColor={variant === "outlined" ? COLOR.secondary : COLOR.foreground}
    >
      {children}
    </StyledComponent>
  );
};
