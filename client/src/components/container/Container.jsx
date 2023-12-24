import React from "react";
import { cw } from "../../utils/cw";

export const Container = ({ children, className, width = "w-full", height = "h-full" }) => {
  return (
    <section className={cw(`${width} ${height}  p-2`)}>
      <div
        className={cw(
          `flex h-full w-full flex-col items-center justify-center rounded-md `,
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};
