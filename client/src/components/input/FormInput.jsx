import React from "react";
import { cw } from "../../utils/cw";

export const FormInput = (props) => {
  const { id, onChange, className, errorMessage, label, ...inputProps } = props;

  return (
    <div className="relative my-4">
      <input
        id={id}
        autoComplete="off"
        {...inputProps}
        onChange={onChange}
        className={cw(
          "peer block border rounded-lg w-72 p-2 focus:outline-none focus:ring-1 focus:border-accent-secondary placeholder:text-transparent",
          className
        )}
      />
      {label && (
        <label
          htmlFor={id}
          className="absolute text-sm px-1 text-gray-500 duration-300 transform -translate-y-6 bg-white scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white"
        >
          {label}
        </label>
      )}
      <span className="text-red-500 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        {errorMessage}
      </span>
    </div>
  );
};
