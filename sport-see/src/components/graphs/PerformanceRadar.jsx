import React, { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { getUserPerformance } from "../../services/api"; // Appel à l'API depuis api.js

const PerformanceRadar = ({ userId }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        // Appel à l'API pour récupérer les données utilisateur
        const performanceData = await getUserPerformance(userId);

        // Reformater les données pour correspondre au format du RadarChart
        const formattedData = performanceData.data.map((item) => ({
          subject: performanceData.kind[item.kind], // Récupère le label via la clé `kind`
          value: item.value, // Récupère la valeur de performance
        }));

        setData(formattedData);
      } catch (err) {
        setError("Failed to fetch performance data");
      }
    };

    fetchPerformanceData();
  }, [userId]); // Recharge les données si `userId` change

  if (error) return <p>{error}</p>;
  if (data.length === 0) return <p>Loading...</p>;

  return (
    <div className="bg-[#282D30] rounded shadow w-64 h-64">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data}>
          {/* Personnalisation des lignes radiales */}
          <PolarGrid
            stroke="#fff"
            radialLines={false} // Supprime les lignes radiales (axes polaires)
          />
          {/* Style des étiquettes */}
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 12, fill: "#FFF" }} // Ajuste la taille et couleur des étiquettes
          />
          {/* Graphique en radar */}
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceRadar;
