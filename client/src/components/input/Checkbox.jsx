import React from "react";

export const Checkbox = (props) => {
  const { id, label, ...inputProps } = props;

  return (
    <>
      <div class="py-1">
        <input
          class="appearance-none h-4 w-4 border-2 border-accent-secondary rounded bg-transparent checked:bg-accent-secondary checked:border-accent-secondary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          id={id}
          {...inputProps}
        />
        <label class="inline-block" for={id}>
          {label}
        </label>
      </div>
    </>
  );
};
