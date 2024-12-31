import React from "react";
import bike from "../../assets/icons/bike.png";
import gym from "../../assets/icons/gym.png";
import swim from "../../assets/icons/swim.png";
import yoga from "../../assets/icons/yoga.png";
import "./sidebar.css";

const Sidebar = ({ setUserId, userId }) => {
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
      <p className="text-white whitespace-nowrap -rotate-90 pr-32">
        Copiryght, SportSee 2020
      </p>
      <button
        className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white text-black"
        onClick={() => setUserId(userId === 12 ? 18 : 12)}
      >
        Changer d'utilisateur
      </button>
    </aside>
  );
};

export default Sidebar;
