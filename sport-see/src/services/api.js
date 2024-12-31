import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Récupère les données principales
export const getUserData = async (userId) => {
  const response = await api.get(`/user/${userId}`);
  return response.data.data;
};

// Récupère l'activité quotidienne
export const getUserActivity = async (userId) => {
  const response = await api.get(`/user/${userId}/activity`);
  return response.data.data;
};

// Récupère la durée moyenne des sessions
export const getUserAverageSessions = async (userId) => {
  const response = await api.get(`/user/${userId}/average-sessions`);
  return response.data.data;
};

// Récupère les performances de l'utilisateur
export const getUserPerformance = async (userId) => {
  const response = await api.get(`/user/${userId}/performance`);
  return response.data.data;
};

export const getAllUserData = async (userId) => {
  try {
    // Lance tous les appels API en parallèle
    const [mainData, activity, averageSessions, performance] =
      await Promise.all([
        getUserData(userId),
        getUserActivity(userId),
        getUserAverageSessions(userId),
        getUserPerformance(userId),
      ]);

    // Retourne un objet regroupant toutes les données
    return {
      mainData,
      activity,
      averageSessions,
      performance,
    };
  } catch (error) {
    console.error("Failed to fetch all user data", error);
    throw error;
  }
};
