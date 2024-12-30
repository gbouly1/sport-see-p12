import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ProfilePage from "../profilPage/ProfilePage";

const Layout = () => {
  const [userId, setUserId] = useState(12);

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
