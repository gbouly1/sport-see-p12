import React, { useState } from "react";
import ProfilePage from "../../pages/profilPage/ProfilePage";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const Layout = () => {
  const [userId, setUserId] = useState(12);
  console.log("ID utilisateur actif :", userId);

  return (
    <div className="max-w-[1440px] w-full min-h-screen m-auto ">
      <Header />
      <div className="flex row">
        <Sidebar setUserId={setUserId} userId={userId} />
        <ProfilePage userId={userId} />
      </div>
    </div>
  );
};

export default Layout;
