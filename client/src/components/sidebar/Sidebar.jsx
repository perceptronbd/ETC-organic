import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Text } from "../text/Text";
import { navLinks } from "./navLinks";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const { user, logout } = useAuth();

  return (
    <div className="m-2 mr-4 h-[98%] rounded-md bg-foreground">
      <div className={` ${open ? "w-52" : "w-20 "}  relative p-5 duration-300`}>
        <BsFillArrowLeftCircleFill
          className={`absolute -right-3 top-16 h-6 w-6 cursor-pointer rounded-full border-2 border-foreground bg-foreground text-primary  ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="m-0 flex items-center gap-x-4">
          <Text
            type="b"
            className={`m-0 text-2xl text-primary duration-200 ${!open && "flex flex-col"}`}
          >
            ETC
            <span className={`text-accent ${!open && "text-xs text-accent"}`}> Organic</span>
          </Text>
        </div>
        <span className="block h-3" />
        <nav className="h-full w-full">
          {navLinks.map((section, index) => (
            <React.Fragment key={index}>
              {open ? (
                <h1 className={`mt-4 text-xs font-medium  text-textColor-light opacity-50 `}>
                  {section.title}
                </h1>
              ) : (
                <div className="my-2 h-1 w-full rounded-full bg-neutral-200" />
              )}
              <ul>
                {section.links.map((link, linkIndex) => (
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                          ? `flex cursor-pointer items-center ${
                              !open && "justify-center"
                            } rounded-md p-2 text-lg font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-foreground`
                          : `flex cursor-pointer items-center ${
                              !open && "justify-center"
                            } rounded-md p-2 text-lg font-semibold text-textColor transition-all duration-200 hover:bg-accent hover:text-foreground`
                    }
                    to={link.path}
                    key={linkIndex}
                    title={link.title}
                  >
                    <li className={`flex cursor-pointer items-center gap-4 rounded-md text-sm`}>
                      {link.icon}
                      <span className={`${!open && "hidden"} origin-left`}>{link.title}</span>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </nav>
      </div>
      <div className="fixed bottom-2 flex h-12 w-60 items-center justify-between pl-2 text-lg font-semibold hover:cursor-pointer">
        {open && user.phoneNumber}
        <button
          onClick={() => {
            logout();
          }}
        >
          <BiLogOut
            className={`rounded-md bg-background p-1 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-primary hover:text-foreground ${
              !open && "ml-5"
            }`}
            size={"34px"}
          />
        </button>
      </div>
    </div>
  );
};
