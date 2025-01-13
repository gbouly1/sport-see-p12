import React, { useEffect, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { getUserAverageSessions } from "../../services/api";

// Tooltip personnalisé
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black text-xs p-1 rounded">
        <p>{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const AverageSessionsGraph = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAverageSessions = async () => {
      try {
        const response = await getUserAverageSessions(userId);

        // Reformater les jours pour les abréviations (Lundi, Mardi, ...)
        const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
        const formattedData = response.sessions.map((item, index) => ({
          day: daysMap[index],
          sessionLength: item.sessionLength,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Failed to fetch average sessions data", error);
      }
    };

    fetchAverageSessions();
  }, [userId]);

  return (
    <div className="bg-[#F00] p-4 rounded shadow h-[250px] w-[250px] relative">
      <h2 className="text-white size-4 opacity-50 ">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer
        width="100%"
        height="70%"
        className="absolute left-0 bottom-0"
      >
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Axe X */}
          <XAxis
            className="opacity-50"
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#fff", fontSize: 12 }}
          />

          {/* Ligne de progression */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 6 }}
          />

          {/* Tooltip personnalisé */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ stroke: "rgba(0, 0, 0, 0.2)", strokeWidth: 32 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsGraph;
