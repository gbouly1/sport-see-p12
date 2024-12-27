import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getUserData = async (userId) => {
  try {
    const response = await api.get(`/user/${userId}`);
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch user data", error);
    throw error;
  }
};
