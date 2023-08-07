import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiLogOut, BiSolidPurchaseTagAlt } from "react-icons/bi";
import { BsLayoutSidebarInset, BsLayoutSidebar } from "react-icons/bs";
import {
  FaChartLine,
  FaBoxes,
  FaCashRegister,
  FaChartBar,
  FaFileInvoice,
  FaUsers,
  FaShoppingBag,
} from "react-icons/fa";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const navLinks = [
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
    <>
      <div
        className={` bg-foreground p-2 rounded-r-lg text-borderColor h-full z-40 ease-in-out duration-100 ${
          showSidebar ? "w-80 translate-x-0" : "w-[5vw] -translate-x-full"
        }`}
      >
        {showSidebar ? (
          <>
            <div className="w-full h-full ">
              <button
                className="flex ml-2 p-2 text-2xl text-accent-primary bg-background rounded-md items-center cursor-pointer left-[80%] top-2 z-50"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <BsLayoutSidebar />
              </button>

              <div className="mt-4 pl-8">
                <nav className="h-full w-full">
                  <ul>
                    <li className="group h-10 rounded-md w-[90%] hover:bg-accent-primary p-2 flex items-center transition-all ease-in-out duration-500 hover:text-foreground">
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex items-center font-semibold text-lg pl-2 text-accent-primary group-hover:text-foreground transition-all ease-in-out duration-300 "
                            : "flex items-center font-semibold text-lg text-textColor opacity-70 transition-all ease-in-out duration-500 group-hover:text-foreground group-hover:opacity-100"
                        }
                        to="/overview"
                      >
                        <FaChartLine />
                        <span className="w-4"></span>
                        Overview
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                {navLinks.map((section, index) => (
                  <nav className="h-full w-full" key={index}>
                    <h1 className="mt-4 text-base font-semibold  text-textColor opacity-50">
                      {section.title}
                    </h1>
                    <ul>
                      {section.links.map((link, linkIndex) => (
                        <li
                          className="group h-10 rounded-md w-[90%] hover:bg-accent-primary p-2 flex items-center transition-all ease-in-out duration-500 hover:text-foreground"
                          key={linkIndex}
                        >
                          <NavLink
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "flex items-center font-semibold text-lg pl-2 text-accent-primary group-hover:text-foreground transition-all ease-in-out duration-500 "
                                : "flex items-center font-semibold text-lg text-textColor opacity-70  text transition-all ease-in-out duration-300 group-hover:text-foreground group-hover:opacity-100"
                            }
                            to={link.path}
                          >
                            {link.icon}
                            <span className="w-4"></span>
                            {link.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
              <div className="fixed pl-2  hover:cursor-pointertext-lg font-semibold bottom-2 h-12 w-[90%] flex justify-between items-center">
                User Name
                <BiLogOut
                  className="hover:cursor-pointer bg-background hover:bg-accent-secondary hover:text-foreground transition-all ease-in-out duration-300 rounded-md p-1"
                  size={"34px"}
                />
              </div>
            </div>
          </>
        ) : (
          <>{/* bottom button */}</>
        )}
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className={`fixed bg-foreground text-accent-secondary rounded-md p-2 z-30 cursor-pointer ${
            showSidebar ? `-left-[125%]` : `left-[125%]`
          } top-2 text-2xl transition-all ease-in-out duration-300`}
        >
          <BsLayoutSidebarInset />
        </button>
      </div>
    </>
  );
};
