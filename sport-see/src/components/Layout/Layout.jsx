import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div className="max-w-[1440px] w-full min-h-screen m-auto ">
      <Header />
      <Sidebar />
    </div>
  );
};

export default Layout;
