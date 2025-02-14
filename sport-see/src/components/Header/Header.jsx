import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="bg-black h-[70px] flex justify-between items-center h-lg:h-[90px] ">
      <img src={logo} alt="logo" className="h-16 w-auto object-contain pl-3" />
      <nav className=" flex w-full">
        <ul className="w-full text-white flex justify-center gap-[20%]">
          <li>
            <a href="#accueil">Accueil</a>
          </li>
          <li>
            <a href="#profil">Profil</a>
          </li>
          <li>
            <a href="#reglage">Réglage</a>
          </li>
          <li>
            <a href="#communauté">Communauté</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
