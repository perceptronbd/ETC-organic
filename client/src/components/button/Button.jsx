import React from "react";
import { cw } from "../../utils/cw";

export const Button = (props) => {
  const { children, className } = props;

  return (
    <button
      {...props}
      className={cw(
        `bg-accent-primary w-52 h-12 rounded-lg font-semibold text-white hover:bg-opacity-80 transition-all ease-in-out duration-300`,
        {
          "bg-accent-secondary text-accent-secondary bg-opacity-20 hover:text-white":
            props.secondary,
        },
        className
      )}
    >
      {children}
    </button>
  );
};
