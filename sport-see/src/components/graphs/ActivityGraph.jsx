import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getUserActivity } from "../../services/api";

// Légende personnalisée
const CustomLegend = ({ payload }) => {
  return (
    <ul className="flex space-x-4 justify-between mb-4">
      <li>
        <h2 className="text-lg font-bold">Activité quotidienne</h2>
      </li>
      <div className="flex gap-3">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center space-x-1">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="text-gray-700 text-sm font-bold">
              {entry.value}
            </span>
          </li>
        ))}
      </div>
    </ul>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const kilogram = payload.find((item) => item.dataKey === "kilogram");
    const calories = payload.find((item) => item.dataKey === "calories");

    return (
      <div
        style={{
          backgroundColor: "#E60000",
          color: "#fff",
          padding: "10px",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        {/* Poids */}
        {kilogram && <p className="text-sm">{`${kilogram.value}kg`}</p>}
        {/* Calories */}
        {calories && <p className="text-sm">{`${calories.value}kCal`}</p>}
      </div>
    );
  }

  return null;
};

const ActivityGraph = ({ userId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchActivityData = async () => {
      try {
        const response = await getUserActivity(userId);

        // Reformater les données pour Recharts
        const formattedData = response.sessions.map((item, index) => ({
          day: index + 1, // Numéro du jour
          kilogram: item.kilogram,
          calories: item.calories,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Failed to fetch activity data", error);
      }
    };

    fetchActivityData();
  }, [userId]);

  return (
    <div className="bg-[#FBFBFB] rounded-lg shadow w-full h-full pb-0 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Grille */}
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          {/* Axe X (jours) */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
          />

          {/* Axe Y gauche (invisible pour les calories) */}
          <YAxis
            yAxisId="left"
            orientation="left"
            tickLine={false}
            axisLine={false}
            hide={true} // Cache l'axe gauche
            domain={["dataMin - 10", "dataMax + 10"]}
          />

          {/* Axe Y droite (poids en kg) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#9B9EAC", fontSize: 14 }}
            domain={["dataMin - 1", "dataMax + 1"]}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{ backgroundColor: "#E60000", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            content={<CustomTooltip />}
            labelFormatter={() => ""}
          />

          {/* Légende personnalisée */}
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            content={<CustomLegend />}
          />

          {/* Barres pour le poids */}
          <Bar
            yAxisId="right" // Associe au poids
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            name="Poids (kg)"
            radius={[3, 3, 0, 0]} // Bord arrondi
          />

          {/* Barres pour les calories */}
          <Bar
            yAxisId="left" // Associe aux calories (axe gauche invisible)
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            name="Calories brûlées (kCal)"
            radius={[3, 3, 0, 0]} // Bord arrondi
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityGraph;
