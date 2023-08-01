import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsLayoutSidebarInset, BsLayoutSidebar } from "react-icons/bs";
import {
  FaChartLine,
  FaBoxes,
  FaCashRegister,
  FaChartBar,
  FaFileInvoice,
  FaReceipt,
} from "react-icons/fa";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const navLinks = [
    {
      title: "Dashboard",
      links: [
        {
          title: "Product List",
          path: "/product-list",
          icon: <FaBoxes />,
        },
        { title: "Sales", path: "/sales", icon: <FaCashRegister /> },
      ],
    },
    {
      title: "Reports",
      links: [
        { title: "Sales", path: "/sales-report", icon: <FaChartBar /> },
        {
          title: "Purchase",
          path: "/purchase-report",
          icon: <FaFileInvoice />,
        },
        {
          title: "All Expenses",
          path: "/expenses-report",
          icon: <FaReceipt />,
        },
      ],
    },
  ];

  return (
    <>
      <div
        className={` bg-foreground p-2 rounded-r-lg text-borderColor h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "w-1/5 translate-x-0" : "w-[5vw] -translate-x-full"
        }`}
      >
        {showSidebar ? (
          <>
            <div className="w-full h-full ">
              <button
                className="flex  p-2 text-2xl text-accent-primary bg-background rounded-md items-center cursor-pointer left-[80%] top-2 z-50"
                onClick={() => setShowSidebar(!showSidebar)}
              >
                <BsLayoutSidebar />
              </button>

              <div className="mt-4  pl-8">
                <nav className="h-full w-full">
                  <ul>
                    <li className="group h-10 rounded-md w-[90%] hover:bg-accent-primary p-2 flex items-center transition-all ease-in-out duration-300 hover:text-foreground">
                      <NavLink
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "flex items-center font-semibold text-lg text-accent-primary group-hover:text-foreground transition-all ease-in-out duration-300 "
                            : "flex items-center font-semibold text-lg pl-4 text-textColor transition-all ease-in-out duration-300 group-hover:text-foreground"
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
                          className="group h-10 rounded-md w-[90%] hover:bg-accent-primary p-2 flex items-center transition-all ease-in-out duration-300 hover:text-foreground"
                          key={linkIndex}
                        >
                          <NavLink
                            className={({ isActive, isPending }) =>
                              isPending
                                ? "pending"
                                : isActive
                                ? "flex items-center font-semibold text-lg text-accent-primary group-hover:text-foreground transition-all ease-in-out duration-300 "
                                : "flex items-center font-semibold text-lg pl-4 text-textColor transition-all ease-in-out duration-300 group-hover:text-foreground"
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
