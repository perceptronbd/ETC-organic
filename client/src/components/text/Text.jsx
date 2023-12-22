import React from "react";
import { cw } from "../../utils/cw";

export const Text = ({ variant = "bodyMedium", type = "normal", children, className }) => {
  const Component =
    (variant === "headerLarge" && "h1") ||
    (variant === "headerMedium" && "h2") ||
    (variant === "headerSmall" && "h3") ||
    (variant === "titleLarge" && "h4") ||
    (variant === "titleMedium" && "h5") ||
    (variant === "titleSmall" && "h6") ||
    (variant === "bodyMedium" && "p") ||
    (variant === "bodySmall" && "p");

  return (
    <Component
      className={cw(
        "text-textColor",
        {
          "text-7xl": variant === "headerLarge",
          "text-5xl": variant === "headerMedium",
          "text-3xl": variant === "headerSmall",
          "text-2xl": variant === "titleLarge",
          "text-xl": variant === "titleMedium",
          "text-lg": variant === "titleSmall",
          "text-base": variant === "bodyMedium",
          "text-sm": variant === "bodySmall",
        },
        {
          "font-bold": type === "b",
          "font-medium": type === "m",
          "font-normal": type === "normal",
        },
        className
      )}
    >
      {children}
    </Component>
  );
};
