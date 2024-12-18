import React from "react";
import "./sidebar.css";
import yoga from "../../assets/icons/yoga.png";
import swim from "../../assets/icons/swim.png";
import bike from "../../assets/icons/bike.png";
import gym from "../../assets/icons/gym.png";

const Sidebar = () => {
  return (
    <aside className="bg-black w-28 min-h-screen flex items-center flex-col justify-around">
      <ul className="icons-list gap-5 flex flex-col">
        <li>
          <img src={yoga} alt="icon yoga" />
        </li>
        <li>
          <img src={swim} alt="icon swim" />
        </li>
        <li>
          <img src={bike} alt="icon bike" />
        </li>
        <li>
          <img src={gym} alt="icon gym" />
        </li>
      </ul>
      <p className="text-white whitespace-nowrap -rotate-90 pl-32">
        Copiryght, SportSee 2020
      </p>
    </aside>
  );
};

export default Sidebar;
