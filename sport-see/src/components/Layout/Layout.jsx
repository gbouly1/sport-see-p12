import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ProfilePage from "../profilPage/ProfilePage";

const Layout = () => {
  return (
    <div className="max-w-[1440px] w-full min-h-screen m-auto ">
      <Header />
      <div className="flex row">
        <Sidebar />
        <ProfilePage />
      </div>
    </div>
  );
};

export default Layout;
