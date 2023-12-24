import React from "react";
import { cw } from "../../utils/cw";

export const SearchInput = React.forwardRef(({ onChange, searchQuery, className }, ref) => {
  return (
    <div className="relative my-2 ">
      <input
        autoComplete="off"
        placeholder="Search..."
        id="search"
        type="text"
        value={searchQuery}
        onChange={onChange}
        className={cw(
          "peer block h-10 w-72 rounded-lg border p-2 text-textColor-light placeholder:text-transparent hover:border-primary focus:border-primary focus:text-textColor focus:outline-none focus:ring-1",
          className
        )}
        ref={ref}
      />

      <label
        htmlFor={"search"}
        className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-6 scale-75 transform bg-white px-1 text-sm text-gray-500 duration-300 peer-placeholder-shown:-translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:bg-white peer-focus:text-primary"
      >
        Search...
      </label>
    </div>
  );
});

SearchInput.displayName = "SearchInput";
