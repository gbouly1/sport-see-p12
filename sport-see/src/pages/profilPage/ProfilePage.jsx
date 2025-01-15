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
        setError("failed to load user data");
      }
    };
    fetchData();
  }, [userId]);

  if (error) return <p>{error}</p>;
  if (!userData) return <p>Loading...</p>;
  return (
    <div className="w-full profil-page-container p-16">
      <div className="flex flex-col gap-8 pb-4">
        <h1 className="text-5xl font-semibold">
          Bonjour{" "}
          <span className="text-[#FF0101]">
            {userData.mainData.userInfos.firstName}
          </span>
        </h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier</p>
      </div>

      <div className="graph-container flex flex-row justify-between">
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
