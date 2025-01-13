import React, { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { getUserAverageSessions } from "../../services/api";

const AverageSessionsGraph = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAverageSessions = async () => {
      try {
        const response = await getUserAverageSessions(userId);

        // Reformater les données pour utiliser les jours abrégés
        const formattedData = response.sessions.map((item) => {
          const days = ["L", "M", "M", "J", "V", "S", "D"];
          return {
            day: days[item.day - 1], // Mappe 1 -> "L", 2 -> "M", ...
            sessionLength: item.sessionLength,
          };
        });

        setData(formattedData);
      } catch (error) {
        console.error("Failed to fetch average sessions data", error);
      }
    };

    fetchAverageSessions();
  }, [userId]);

  return (
    <div className="bg-red-500 p-4 rounded shadow w-[250px]  relative h-full">
      <h2 className="text-white text-sm absolute top-2 left-4">
        Durée moyenne des sessions
      </h2>

      {/* Graphique */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
        >
          {/* Axe X (jours) */}
          <XAxis
            dataKey="day"
            stroke="#fff"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{ backgroundColor: "white", color: "#000" }}
            itemStyle={{ color: "#000" }}
            formatter={(value) => `${value} min`}
            cursor={false} // Supprime le curseur survolé
          />

          {/* Ligne principale */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFF"
            strokeWidth={2}
            dot={{ r: 3 }} // Points sur la ligne
            activeDot={{ r: 6 }} // Point survolé
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsGraph;
