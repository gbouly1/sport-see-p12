/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scanne les fichiers React
  ],
  theme: {
    extend: {
      // Tu peux personnaliser ici, comme les couleurs spécifiques de la maquette
      colors: {
        primary: "#FF0101", // Couleur principale rouge
        secondary: "#282D30", // Gris foncé
        background: "#FBFBFB", // Fond clair
      },
    },
  },
  plugins: [],
};
