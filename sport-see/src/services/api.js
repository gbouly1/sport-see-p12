import axios from "axios";
import {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance,
} from "../mocks/mockData";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Variable pour activer les mocks
const useMock = process.env.REACT_APP_USE_MOCK === "false";

// Récupère les données principales
export const getUserData = async (userId) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUserData), 500); // Simule un délai
    });
  }
  const response = await api.get(`/user/${userId}`);
  return response.data.data;
};

// Récupère l'activité quotidienne
export const getUserActivity = async (userId) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUserActivity), 500); // Simule un délai
    });
  }
  const response = await api.get(`/user/${userId}/activity`);
  return response.data.data;
};

// Récupère la durée moyenne des sessions
export const getUserAverageSessions = async (userId) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUserAverageSessions), 500); // Simule un délai
    });
  }
  const response = await api.get(`/user/${userId}/average-sessions`);
  return response.data.data;
};

// Récupère les performances de l'utilisateur
export const getUserPerformance = async (userId) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockUserPerformance), 500); // Simule un délai
    });
  }
  const response = await api.get(`/user/${userId}/performance`);
  return response.data.data;
};

// Récupère toutes les données en parallèle
export const getAllUserData = async (userId) => {
  if (useMock) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          mainData: mockUserData,
          activity: mockUserActivity,
          averageSessions: mockUserAverageSessions,
          performance: mockUserPerformance,
        });
      }, 500); // Simule un délai
    });
  }

  try {
    const [mainData, activity, averageSessions, performance] =
      await Promise.all([
        getUserData(userId),
        getUserActivity(userId),
        getUserAverageSessions(userId),
        getUserPerformance(userId),
      ]);

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
