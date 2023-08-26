import React from "react";

export const Input = (props) => {
  const { id, onChange, className, ...inputProps } = props;

  return (
    <>
      <div class="relative">
        <input
          type="text"
          id="floating_filled"
          class="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-700  border-4 border-red-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          {...inputProps}
        />
        <label
          for="floating_filled"
          class="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:bg-white"
        >
          Floating filled
        </label>
      </div>
    </>
  );
};
