import React from "react";
import calories from "../../assets/icons/calories.png";
import carbs from "../../assets/icons/carbs.png";
import fat from "../../assets/icons/fat.png";
import proteins from "../../assets/icons/protein.png";

const KeyDataCard = ({ calorie, protein, carbohydrate, lipid }) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-black flex items-center w-60 h-28 pl-[15%] bg-[#FBFBFB] rounded-md">
        <img src={calories} alt="calories icon" className="w-[60px] h-[60px]" />
        <p className="pl-2 font-bold text-xl flex flex-col">
          {calorie}kCal
          <br />
          <span className="text-[#74798C] font-medium text-sm ">Calories</span>
        </p>
      </div>
      <div className="text-black flex items-center w-60 h-28 pl-[15%] bg-[#FBFBFB] rounded-md">
        <img src={proteins} alt="calories icon" className="w-[60px] h-[60px]" />
        <p className="pl-2 font-bold text-xl flex flex-col">
          {protein}g
          <br />
          <span className="text-[#74798C] font-medium text-sm ">Proteines</span>
        </p>
      </div>
      <div className="text-black flex items-center w-60 h-28 pl-[15%] bg-[#FBFBFB] rounded-md">
        <img src={carbs} alt="calories icon" className="w-[60px] h-[60px]" />
        <p className="pl-2 font-bold text-xl flex flex-col">
          {carbohydrate}g
          <br />
          <span className="text-[#74798C] font-medium text-sm ">Glucides</span>
        </p>
      </div>
      <div className="text-black flex items-center w-60 h-28 pl-[15%] bg-[#FBFBFB] rounded-md">
        <img src={fat} alt="calories icon" className="w-[60px] h-[60px]" />
        <p className="pl-2 font-bold text-xl flex flex-col">
          {lipid}g
          <br />
          <span className="text-[#74798C] font-medium text-sm ">Lipides</span>
        </p>
      </div>
    </div>
  );
};

export default KeyDataCard;
