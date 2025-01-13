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
    <div className="bg-gray-100 p-4 rounded shadow w-full h-[300px]">
      <h2 className="text-lg font-bold mb-4">Activité quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* Grille */}
          <CartesianGrid strokeDasharray="3 3" />

          {/* Axe X (jours) */}
          <XAxis dataKey="day" tickLine={false} />

          {/* Axe Y gauche (poids en kg) */}
          <YAxis
            yAxisId="left"
            orientation="left"
            tickLine={false}
            axisLine={false}
          />

          {/* Axe Y droit (calories en kCal) */}
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
          />

          {/* Info-bulle */}
          <Tooltip
            formatter={(value, name) =>
              `${value} ${name === "kilogram" ? "kg" : "kCal"}`
            }
          />

          {/* Légende */}
          <Legend verticalAlign="top" align="right" />

          {/* Barres pour le poids */}
          <Bar
            yAxisId="left"
            dataKey="kilogram"
            fill="#000"
            barSize={10}
            name="Poids (kg)"
            radius={[10, 10, 0, 0]} // Bord arrondi en haut
          />

          {/* Barres pour les calories */}
          <Bar
            yAxisId="right"
            dataKey="calories"
            fill="#FF0101"
            barSize={10}
            name="Calories brûlées (kCal)"
            radius={[10, 10, 0, 0]} // Bord arrondi en haut
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityGraph;
