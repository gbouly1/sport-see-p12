import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="bg-black h-[90px] flex justify-between items-center">
      <img src={logo} alt="logo" className="h-16 w-auto object-contain pl-3" />
      <nav className=" flex w-full">
        <ul className="w-full text-white flex justify-center gap-[20%]">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
