import React from "react";
import { cw } from "../../utils/cw";

export const Button = ({ props, children, className }) => {
  return (
    <button
      {...props}
      className={cw(
        `bg-accent-primary w-44 h-8 rounded-md font-semibold text-white ${className}`
      )}
    >
      {children}
    </button>
  );
};
