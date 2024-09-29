import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mt-24 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
