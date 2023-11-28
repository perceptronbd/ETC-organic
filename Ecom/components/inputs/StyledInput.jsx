import React from "react";
import { TextInput } from "react-native-paper";
import { StyledComponent } from "nativewind";
import { View } from "react-native";

export const StyledInput = ({ className, ...props }) => {
  const { variant, ...rest } = props;

  return (
    <StyledComponent component={View}>
      <StyledComponent
        component={TextInput}
        className={`w-72 ${className}`}
        activeOutlineColor="#0C904D"
        outlineStyle={{
          borderRadius: 15,
          borderWidth: 2,
        }}
        {...rest}
      />
    </StyledComponent>
  );
};
