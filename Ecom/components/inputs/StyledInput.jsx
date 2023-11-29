import React from "react";
import { TextInput } from "react-native-paper";
import { StyledComponent } from "nativewind";

export const StyledInput = ({ className, ...props }) => {
  const { variant, ...rest } = props;

  return (
    <StyledComponent
      component={TextInput}
      tw={`w-72 my-1 ${className}`}
      activeOutlineColor="#0C904D"
      outlineStyle={{
        borderRadius: 18,
        borderWidth: 1,
      }}
      {...rest}
    />
  );
};
