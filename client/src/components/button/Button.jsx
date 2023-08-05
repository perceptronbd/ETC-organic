import React from "react";
import { cw } from "../../utils/cw";

export const Button = ({ props, children, className }) => {
  return (
    <button
      {...props}
      className={cw(
        `bg-accent-primary w-52 h-12 rounded-lg font-semibold text-white hover:bg-opacity-80 transition-all ease-in-out duration-300`,
        className
      )}
    >
      {children}
    </button>
  );
};
