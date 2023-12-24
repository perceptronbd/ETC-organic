import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { cw } from "../../utils/cw";

export const Dropdown = (props) => {
  const { className, classNameDropdown, listItem } = props;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="relative z-50">
      <button
        onClick={handleOpen}
        className={cw(
          "3xl:w-40 3xl:text-base flex w-36 items-center justify-between rounded border bg-foreground px-2 py-0.5 text-sm",
          className
        )}
      >
        {selected ? selected : "Select Option"}
        <ChevronRight
          className={`3xl:w-4 3xl:h-4 ml-4 h-3 w-3 transform transition-transform duration-300 ${
            open ? "rotate-90 transform transition-transform duration-300" : ""
          } `}
        />
      </button>
      <div
        className={cw(
          `3xl:text-base absolute top-7 w-36 rounded-md border bg-foreground p-1 text-sm transition-transform ${
            open ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0"
          }`,
          classNameDropdown
        )}
      >
        {open ? (
          <ul>
            {listItem ? (
              listItem.map((item, index) => (
                <li
                  className="w-full cursor-pointer rounded-md px-2 py-1 transition-all duration-200 ease-in-out hover:bg-background"
                  key={index}
                  onClick={() => handleSelect(item.title)}
                >
                  {item.title}
                </li>
              ))
            ) : (
              <li className="w-full cursor-pointer rounded-md bg-background px-2 py-1 transition-all duration-200 ease-in-out">
                No Option
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </section>
  );
};
