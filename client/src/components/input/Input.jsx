import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const Input = (props) => {
  const { id, onChange, className, ...inputProps } = props;

  return (
    <input
      {...inputProps}
      onChange={onChange}
      className={twMerge(
        clsx(
          "border rounded-full w-72 p-2 m-2 focus:outline-none focus:ring-1 focus:border-accent-secondary"
        ),
        className
      )}
    />
  );
};
