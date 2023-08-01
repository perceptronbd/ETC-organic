import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex w-full h-screen bg-background">
      <Sidebar />
      <Outlet />
    </div>
  );
};
