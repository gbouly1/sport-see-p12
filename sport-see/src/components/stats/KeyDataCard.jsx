import React from "react";
import caloriesIcon from "../../assets/icons/calories.png";
import carbsIcon from "../../assets/icons/carbs.png";
import fatIcon from "../../assets/icons/fat.png";
import proteinsIcon from "../../assets/icons/protein.png";

const KeyDataCard = ({ keyData }) => {
  const icons = {
    calorieCount: { icon: caloriesIcon, unit: "kCal", label: "Calories" },
    proteinCount: { icon: proteinsIcon, unit: "g", label: "Protéines" },
    carbohydrateCount: { icon: carbsIcon, unit: "g", label: "Glucides" },
    lipidCount: { icon: fatIcon, unit: "g", label: "Lipides" },
  };

  return (
    <div className="mr-3 flex flex-col gap-10">
      {Object.entries(keyData).map(([key, value]) => (
        <div
          key={key}
          className="text-black flex items-center w-48 h-28 pl-[15%] bg-[#FBFBFB] rounded-md"
        >
          <img
            src={icons[key].icon}
            alt={`${icons[key].label} icon`}
            className="w-[60px] h-[60px]"
          />
          <p className="pl-2 font-bold text-xl flex flex-col">
            {value}
            {icons[key].unit}
            <br />
            <span className="text-[#74798C] font-medium text-sm">
              {icons[key].label}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default KeyDataCard;
