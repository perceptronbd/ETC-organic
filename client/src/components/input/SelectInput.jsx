import React from "react";
import { cw } from "../../utils/cw";

export const SelectInput = (props) => {
  const {
    id,
    name,
    onChange,
    className,
    errorMessage,
    label,
    selectOpts,
    ...inputProps
  } = props;

  return (
    <div className="relative my-2">
      <select
        id={id}
        name={name}
        {...inputProps}
        onChange={onChange}
        className={cw(
          `peer block border rounded-lg w-72 p-2 focus:outline-none focus:ring-1 focus:border-accent-secondary `,
          className
        )}
      >
        <optgroup label={label} className="font-semibold text-sm">
          {/* Add a default "Select" option */}
          <option
            value=""
            key="select-option"
            className="bg-background text-textColor-light"
            disabled
            selected
          >
            Select {label}
          </option>
          {selectOpts.map((opt) => (
            <option value={opt.name} key={opt.id} className="bg-background">
              {opt.name}
            </option>
          ))}
        </optgroup>
      </select>
      {label && (
        <label
          htmlFor={id}
          className="absolute text-sm px-1 text-gray-500 duration-300 transform -translate-y-6 bg-foreground scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-accent-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white"
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
