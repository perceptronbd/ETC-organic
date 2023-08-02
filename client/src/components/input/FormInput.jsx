import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export const FormInput = (props) => {
  const { id, onChange, className, errorMessage, ...inputProps } = props;

  return (
    <div className="flex flex-col my-2">
      <input
        {...inputProps}
        onChange={onChange}
        className={twMerge(
          clsx(
            "peer border rounded-md w-72 p-2 focus:outline-none focus:ring-1 focus:border-accent-secondary"
          ),
          className
        )}
      />
      <span className="text-red-500 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        {errorMessage}
      </span>
    </div>
  );
};
