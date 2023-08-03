import React from "react";
import { cw } from "../../utils/cw";

export const Text = (props) => {
  const { children, className } = props;
  return (
    <p
      className={cw(
        {
          "text-2xl font-bold": props.h1,
          "text-xl font-semibold": props.h2,
          "text-lg font-semibold": props.h3,
          "text-base font-semibold": props.h4,
          "text-base font-medium": props.h5,
          "text-base font-normal": props.h6,
          "text-sm font-normal": props.p,
        },
        className
      )}
    >
      {children}
    </p>
  );
};
