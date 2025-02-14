import React, { useEffect, useState } from "react";
import ActivityGraph from "../../components/graphs/ActivityGraph";
import AverageSessionsGraph from "../../components/graphs/AverageSessionsGraph";
import PerformanceRadar from "../../components/graphs/PerformanceRadar";
import ScoreGraph from "../../components/graphs/ScoreGraph";
import KeyDataCard from "../../components/stats/KeyDataCard";
import { getAllUserData } from "../../services/api";

const ProfilePage = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUserData(userId);
        console.log("Données récupérées :", data);
        setUserData(data);
      } catch (err) {
        setError(
          "Une erreur est survenue. Impossible de charger les données, veuillez réessayer plus tard."
        );
      }
    };
    fetchData();
  }, [userId]);

  if (error)
    return (
      <div className="w-full flex justify-center items-center">
        <p className="text-red-700 text-center w-9/12 font-bold text-2xl">
          {error}
        </p>
      </div>
    );
  if (!userData)
    return (
      <p className="w-full flex justify-center items-center">Loading...</p>
    );
  return (
    <div className="pt-6 pl-6 w-full profil-page-container custom-md:pl-14 custom-md:pt-10">
      <div className="gap-4 flex flex-col custom-md:gap-4 pb-4">
        <h1 className="text-2xl font-semibold custom-md:text-5xl">
          Bonjour{" "}
          <span className="text-[#FF0101]">
            {userData.mainData.userInfos.firstName}
          </span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
      </div>

      <div className=" flex flex-row justify-between w-full gap-5">
        <div className="flex flex-col gap-10">
          <ActivityGraph userId={userId} />

          <div className="flex row-auto justify-between gap-8">
            <div>
              <AverageSessionsGraph userId={userId} />
            </div>
            <div>
              <PerformanceRadar userId={userId} />
            </div>
            <div>
              <ScoreGraph
                score={userData.mainData.todayScore || userData.mainData.score}
              />
            </div>
          </div>
        </div>
        <KeyDataCard
          calorie={userData.mainData.keyData.calorieCount}
          protein={userData.mainData.keyData.proteinCount}
          carbohydrate={userData.mainData.keyData.carbohydrateCount}
          lipid={userData.mainData.keyData.lipidCount}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
