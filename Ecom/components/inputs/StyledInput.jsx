import React from "react";
import { TextInput } from "react-native-paper";

export const StyledInput = ({ style, ...props }) => {
  const { variant, ...rest } = props;

  return (
    <TextInput
      style={{
        width: 300,
        height: 50,
        marginVertical: 2,
        ...style,
      }}
      activeOutlineColor="#0C904D"
      outlineStyle={{
        borderRadius: 18,
        borderWidth: 1,
      }}
      {...rest}
    />
  );
};
