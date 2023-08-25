import React, { useState } from "react";
import { cw } from "../../utils/cw";
import { BsChevronRight } from "react-icons/bs";

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
    <section className="z-50 relative">
      <button
        onClick={handleOpen}
        className={cw(
          "flex items-center justify-between bg-foreground w-36 3xl:w-40 px-2 py-0.5 rounded text-sm 3xl:text-base border",
          className
        )}
      >
        {selected ? selected : "Select Option"}
        <BsChevronRight
          className={`ml-4 w-3 h-3 3xl:w-4 3xl:h-4 transform transition-transform duration-300 ${
            open ? "transform rotate-90 transition-transform duration-300" : ""
          } `}
        />
      </button>
      <div
        className={cw(
          `absolute top-7 w-36 p-1 transition-transform bg-foreground border text-sm 3xl:text-base rounded-md ${
            open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-10px]"
          }`,
          classNameDropdown
        )}
      >
        {open ? (
          <ul className="">
            {listItem ? (
              listItem.map((item, index) => (
                <li
                  className="w-full hover:bg-background cursor-pointer rounded-md px-2 py-1 transition-all ease-in-out duration-200"
                  key={index}
                  onClick={() => handleSelect(item.title)}
                >
                  {item.title}
                </li>
              ))
            ) : (
              <li className="w-full bg-background cursor-pointer rounded-md px-2 py-1 transition-all ease-in-out duration-200">
                No Option
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </section>
  );
};
