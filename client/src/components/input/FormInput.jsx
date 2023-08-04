import React from "react";
import { cw } from "../../utils/cw";

export const FormInput = (props) => {
  const { id, onChange, className, errorMessage, label, ...inputProps } = props;

  return (
    <div className="flex flex-col my-2">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        id={id}
        {...inputProps}
        onChange={onChange}
        className={cw(
          "peer border rounded-full w-72 p-2 focus:outline-none focus:ring-1 focus:border-accent-secondary placeholder:px-2",
          className
        )}
      />
      <span className="text-red-500 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        {errorMessage}
      </span>
    </div>
  );
};
