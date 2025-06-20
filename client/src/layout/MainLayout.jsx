import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#c8e3f0] ">
      <div className="flex-grow">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
