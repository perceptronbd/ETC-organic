import React from "react";
import { cw } from "../../utils/cw";

export const Container = (props) => {
  const { children, className } = props;
  return (
    <div
      className={cw("w-full m-2 3xl:mx-28 h-[98vh] overflow-x-auto", className)}
    >
      {children}
    </div>
  );
};
