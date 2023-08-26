import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiLogOut, BiSolidPurchaseTagAlt } from "react-icons/bi";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {
  FaChartLine,
  FaBoxes,
  FaCashRegister,
  FaChartBar,
  FaFileInvoice,
  FaUsers,
  FaShoppingBag,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { Text } from "../text/Text";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const { user, logout } = useAuth();

  const navLinks = [
    {
      title: "Home",
      links: [
        {
          title: "Overview",
          path: "/overview",
          icon: <FaChartLine />,
        },
      ],
    },
    {
      title: "Dashboard",
      links: [
        {
          title: "Product List",
          path: "/product-list",
          icon: <FaBoxes />,
        },
        {
          title: "Purchase",
          path: "/purchase",
          icon: <BiSolidPurchaseTagAlt />,
        },
        { title: "Sales", path: "/sales", icon: <FaCashRegister /> },
      ],
    },
    {
      title: "Reports",
      links: [
        { title: "Sales Report", path: "/sales-report", icon: <FaChartBar /> },
        {
          title: "Purchase",
          path: "/purchase-report",
          icon: <FaFileInvoice />,
        },
      ],
    },
    {
      title: "Others",
      links: [
        { title: "Orders", path: "/orders", icon: <FaShoppingBag /> },
        { title: "Employees", path: "/employees", icon: <FaUsers /> },
      ],
    },
  ];

  return (
    <div className="bg-foreground h-[98%] rounded-md m-2 mr-4">
      <div className={` ${open ? "w-64" : "w-24 "}  p-5 relative duration-300`}>
        <BsFillArrowRightCircleFill
          className={`absolute w-8 h-8  cursor-pointer -right-3 top-9 text-accent-secondary border-foreground bg-foreground
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Text
            h1
            className={`text-accent-secondary text-2xl 3xl:text-3xl duration-200  ${
              !open && "flex flex-col"
            }`}
          >
            etc
            <span
              className={`text-accent-primary ${
                !open && "text-accent-primary text-xs"
              }`}
            >
              {" "}
              organic
            </span>
          </Text>
        </div>
        <ul className="pt-6"></ul>
        <nav className="w-full h-full">
          {navLinks.map((section, index) => (
            <React.Fragment key={index}>
              {open ? (
                <h1
                  className={`mt-4 text-sm font-medium  text-textColor opacity-50 `}
                >
                  {section.title}
                </h1>
              ) : (
                <div className="my-2 w-6 h-1 rounded-full bg-neutral-200" />
              )}
              <ul>
                {section.links.map((link, linkIndex) => (
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "flex font-semibold text-lg text-accent-primary hover:bg-accent-primary hover:text-foreground rounded-md p-2 cursor-pointer items-center transition-all duration-200 "
                        : "flex font-semibold text-lg text-textColor hover:bg-accent-primary hover:text-foreground rounded-md p-2 cursor-pointer items-center transition-all duration-200"
                    }
                    to={link.path}
                    key={linkIndex}
                    title={link.title}
                  >
                    <li
                      className={`flex rounded-md cursor-pointer  text-sm items-center`}
                    >
                      {link.icon}
                      <span className="w-4"></span>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-200`}
                      >
                        {link.title}
                      </span>
                    </li>
                  </NavLink>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </nav>
      </div>
      <div className="w-60 pl-2 fixed hover:cursor-pointertext-lg font-semibold bottom-2 h-12 flex justify-between items-center">
        {open && user.phoneNumber}
        <button
          onClick={() => {
            logout();
          }}
        >
          <BiLogOut
            className={`hover:cursor-pointer bg-background hover:bg-accent-secondary hover:text-foreground transition-all ease-in-out duration-300 rounded-md p-1 ${
              !open && "ml-5"
            }`}
            size={"34px"}
          />
        </button>
      </div>
    </div>
  );
};
