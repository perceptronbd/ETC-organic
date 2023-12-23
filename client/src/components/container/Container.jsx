import React from "react";
import { cw } from "../../utils/cw";

export const Container = ({ children, bg, width = "w-full", height = "h-full" }) => {
  return (
    <section className={cw(`${width} ${height}  p-2`)}>
      <div className={cw(`flex h-full w-full items-center justify-center ${bg}`)}>{children}</div>
    </section>
  );
};
