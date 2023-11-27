import { StyledComponent } from "nativewind";
import React from "react";
import { Button } from "react-native-paper";

export const StyledButton = ({ children, ...props }) => {
  const { variant, className, ...rest } = props;

  return (
    <StyledComponent
      {...rest}
      component={Button}
      tw={`w-60 rounded-lg ${className}`}
      mode={variant === "outlined" ? "outlined" : "contained"}
      textColor={variant === "outlined" ? "#0C904D" : "#fff"}
      buttonColor={variant === "outlined" ? "" : "#0C904D"}
      rippleColor={variant === "outlined" ? "#0C904D" : "#fff"}
    >
      {children}
    </StyledComponent>
  );
};
