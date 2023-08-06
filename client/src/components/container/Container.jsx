import React from "react";
import { cw } from "../../utils/cw";

export const Container = (props) => {
  const { children, className } = props;
  return (
    <div
      className={cw(
        "w-full m-4 3xl:mx-28 h-[97vh] p-2 overflow-x-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
