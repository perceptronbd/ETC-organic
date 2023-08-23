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
import { useAuth } from "../../context/AuthContext";
import { Text } from "../text/Text";

export const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const { logout, user } = useAuth();

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
          showSidebar
            ? "w-80 3xl:w-[340px]  translate-x-0"
            : "w-[5vw] -translate-x-full"
        }`}
      >
        {showSidebar ? (
          <>
            <div className="w-full h-full">
              <div className="flex items-center">
                <button
                  className="flex ml-2 p-2 text-2xl text-accent-primary bg-background rounded-md items-center cursor-pointer left-[80%] top-2 z-50 mr-4"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  <BsLayoutSidebar />
                </button>
                <div>
                  <Text
                    h1
                    className={"text-accent-secondary text-2xl 3xl:text-3xl"}
                  >
                    etc
                    <span className="text-accent-primary"> organic</span>
                  </Text>
                  <Text className={"text-[10px] 3xl:text-xs"}>
                    Enterprise Resource Planning
                  </Text>
                </div>
              </div>
              <div className="mt-4 pl-8">
                <nav className="h-full w-full">
                  <ul>
                    <NavLink
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "flex items-center font-semibold text-lg pl-2 text-accent-primary group-hover:text-foreground transition-all ease-in-out duration-300 "
                          : "flex items-center font-semibold text-lg text-textColor opacity-70 transition-all ease-in-out duration-300 group-hover:text-foreground group-hover:opacity-100"
                      }
                      to="/overview"
                    >
                      <li className="group h-10 rounded-md w-[90%] hover:bg-accent-primary p-2 flex items-center transition-all ease-in-out duration-300 hover:text-foreground">
                        <FaChartLine />
                        <span className="w-4" />
                        Overview
                      </li>
                    </NavLink>
                  </ul>
                </nav>
                {navLinks.map((section, index) => (
                  <nav className="h-full w-full" key={index}>
                    <h1 className="mt-4 text-base font-semibold  text-textColor opacity-50">
                      {section.title}
                    </h1>
                    <ul>
                      {section.links.map((link, linkIndex) => (
                        <NavLink
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "flex items-center font-semibold text-lg pl-2 text-accent-primary group-hover:text-foreground transition-all ease-in-out duration-300 "
                              : "flex items-center font-semibold text-lg text-textColor opacity-70  text transition-all ease-in-out duration-300 group-hover:text-foreground group-hover:opacity-100"
                          }
                          to={link.path}
                          key={linkIndex}
                        >
                          <li className="group h-10 rounded-md w-[90%] hover:bg-accent-primary p-2 flex items-center transition-all ease-in-out duration-300 hover:text-foreground">
                            {link.icon}
                            <span className="w-4"></span>
                            {link.title}
                          </li>
                        </NavLink>
                      ))}
                    </ul>
                  </nav>
                ))}
              </div>
              <div className="fixed pl-2  hover:cursor-pointertext-lg font-semibold bottom-2 h-12 w-[90%] flex justify-between items-center">
                {user.phoneNumber}
                <button
                  onClick={() => {
                    logout();
                  }}
                >
                  <BiLogOut
                    className="hover:cursor-pointer bg-background hover:bg-accent-secondary hover:text-foreground transition-all ease-in-out duration-300 rounded-md p-1"
                    size={"34px"}
                  />
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
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
