import React from "react";
import { cw } from "../../utils/cw";
import { Link } from "react-router-dom";

export const LinkButton = (props) => {
  const { children, className } = props;
  return (
    <Link to={props.to}>
      <button
        {...props}
        className={cw(
          `bg-accent-primary w-52 h-12 rounded-lg font-semibold text-white hover:bg-opacity-80 transition-all ease-in-out duration-300`,
          className
        )}
      >
        {children}
      </button>
    </Link>
  );
};
