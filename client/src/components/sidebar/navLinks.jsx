import {
  FaBoxes,
  FaCashRegister,
  FaChartBar,
  FaChartLine,
  FaFileInvoice,
  FaShoppingBag,
  FaUsers,
} from "react-icons/fa";

import { BiSolidPurchaseTagAlt } from "react-icons/bi";

export const navLinks = [
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
