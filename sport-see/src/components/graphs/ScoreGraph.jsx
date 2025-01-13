import React from "react";

const ScoreGraph = ({ score }) => {
  const radius = 16.915; // Rayon du cercle
  const circumference = 2 * Math.PI * radius; // Circonférence totale
  const percentage = Math.round(score * 100); // Convertir en pourcentage
  const progress = (percentage / 100) * circumference; // Longueur de la barre rouge

  return (
    <div className="bg-gray-100 p-4 rounded shadow h-[250px] w-[250px] flex flex-col items-center justify-center">
      <h2 className="text-lg font-bold mb-4 self-start">Score</h2>

      <div className="relative flex items-center justify-center">
        {/* Cercle SVG */}
        <svg className="w-40 h-40" viewBox="0 0 36 36">
          {/* Cercle de fond (grisé) */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="2" // Épaisseur augmentée pour un style plus réaliste
          />
          {/* Cercle de progression (rouge) */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            stroke="#FF0101"
            strokeWidth="2" // Même épaisseur que le cercle de fond
            strokeDasharray={circumference} // Taille totale du cercle
            strokeDashoffset={progress - circumference} // Calcul du progrès
            strokeLinecap="round" // Bord arrondi
            transform="rotate(-90 18 18)" // Départ à gauche (9h)
          />
        </svg>
        {/* Texte au centre */}
        <div className="absolute flex flex-col items-center">
          <p className="text-3xl font-bold text-black">{percentage}%</p>
          <p className="text-sm text-gray-500">de votre objectif</p>
        </div>
      </div>
    </div>
  );
};

export default ScoreGraph;
