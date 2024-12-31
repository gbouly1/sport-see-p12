import React from "react";

const ScoreGraph = ({ score }) => {
  // if (score === null || score === undefined) {
  //   return <p>Loading...</p>; // Message si aucune donnée
  // }

  return (
    <div className="bg-gray-100 p-4 rounded shadow text-center">
      <h2 className="text-lg font-bold">Score</h2>
      <p className="text-3xl font-bold text-primary mt-4">{score}%</p>
      <p className="text-sm text-gray-500">de votre objectif</p>
    </div>
  );
};

export default ScoreGraph;
