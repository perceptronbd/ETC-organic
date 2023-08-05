import React from "react";
import { cw } from "../../utils/cw";

export const SelectInput = (props) => {
  const {
    id,
    onChange,
    className,
    errorMessage,
    label,
    selectOpts,
    ...inputProps
  } = props;

  return (
    <div className="flex flex-col my-2">
      {label && (
        <label htmlFor={id} className="font-semibold mb-2">
          {label}
        </label>
      )}
      <select
        name="name"
        id="id"
        {...inputProps}
        onChange={onChange}
        className={cw(
          `border rounded-xl w-72 p-2 m-2 focus:outline-none focus:ring-1 focus:border-accent-secondary `
        )}
      >
        <optgroup label="Select" className="font-semibold text-sm">
          {selectOpts.map((opt) => (
            <option value={opt.value} key={opt.value} className="bg-background">
              {opt.label}
            </option>
          ))}
        </optgroup>
      </select>

      <span className="text-red-500 hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        {errorMessage}
      </span>
    </div>
  );
};
