import React from "react";

const ScoreGraph = ({ score }) => {
  const percentage = Math.round(score * 100); // Convertir en pourcentage

  return (
    <div className="bg-gray-100 p-4 rounded shadow h-full w-[250px] flex flex-col items-center justify-center">
      <h2 className="text-lg font-bold mb-4">Score</h2>

      <div className="relative flex items-center justify-center">
        {/* Cercle SVG */}
        <svg className="w-32 h-32" viewBox="0 0 36 36">
          {/* Cercle de fond (grisé) */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="2"
          />
          {/* Cercle de progression (rouge) */}
          <circle
            cx="18"
            cy="18"
            r="15.915"
            fill="none"
            stroke="#FF0101"
            strokeWidth="2"
            strokeDasharray={`${percentage}, 100`} // Détermine la progression
            strokeDashoffset="25" // Position du départ
          />
        </svg>
        {/* Texte au centre */}
        <div className="absolute flex flex-col items-center">
          <p className="text-3xl font-bold  text-black-600">{percentage}%</p>
          <p className="text-sm text-gray-500">de votre objectif</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreGraph;
