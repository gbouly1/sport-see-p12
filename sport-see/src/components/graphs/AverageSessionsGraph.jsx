import React, { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { getUserAverageSessions } from "../../services/api";
import "./graph.css"; // Import du fichier CSS existant

// Tooltip personnalisé
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="intro">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

// Curseur personnalisé
const CustomCursor = ({ points }) => {
  const { x } = points[0];
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.1)" // Remplissage semi-transparent
      x={x}
      y={0}
      width={100}
      height={263} // Hauteur totale du graphique
      opacity={1}
    />
  );
};

// Légende personnalisée
const CustomLegend = () => (
  <div className="CustomLegendSession">
    <h3 className="absolute top-2 left-2 w-[70%] opacity-50">
      Durée moyenne des sessions
    </h3>
  </div>
);

const AverageSessionsGraph = ({ userId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAverageSessions = async () => {
      try {
        const response = await getUserAverageSessions(userId);

        // Reformater les jours pour les abréviations
        const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
        const formattedData = response.sessions.map((item, index) => ({
          day: daysMap[index],
          sessionLength: item.sessionLength,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Failed to fetch average sessions data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAverageSessions();
  }, [userId]);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (!data || data.length === 0) {
    return (
      <div className="no-data">
        <p>
          Les données de l'utilisateur sont indisponibles ou en cours de
          chargement.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#F00]  rounded shadow h-[250px] w-[250px] relative ">
      {/* Légende personnalisée */}
      <CustomLegend />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 60,
            // right: 20,
            // left: 20,
            bottom: 5,
          }}
        >
          {/* Axe X */}
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#fff", fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
            opacity={0.5}
          />

          {/* Ligne */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 3 }}
          />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AverageSessionsGraph;
