import React from "react";
import { cw } from "../../utils/cw";

export const TextInput = (props) => {
  const {
    children,
    label,
    id,
    className,
    errorMessage,
    onChange,
    ...inputProps
  } = props;
  return (
    <div className="flex flex-col my-2">
      {label && (
        <label htmlFor={id} className="font-semibold mb-2">
          {label}
        </label>
      )}
      <textarea
        id={id}
        {...inputProps}
        onChange={onChange}
        className={cw(
          "peer border rounded-xl w-full h-28 p-2 focus:outline-none focus:ring-1 focus:border-accent-secondary placeholder:px-2",
          className
        )}
      />
      <span className="text-red-500 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        {errorMessage}
      </span>
    </div>
  );
};
