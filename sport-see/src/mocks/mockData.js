// mocks/mockData.js

export const mockUserData = {
  id: 12,
  userInfos: {
    firstName: "Karl",
    lastName: "Dovineau",
    age: 31,
  },
  todayScore: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
};

export const mockUserActivity = {
  userId: 12,
  sessions: [
    { day: "2020-07-01", kilogram: 80, calories: 240 },
    { day: "2020-07-02", kilogram: 80, calories: 220 },
  ],
};

export const mockUserAverageSessions = {
  userId: 12,
  sessions: [
    { day: 1, sessionLength: 30 },
    { day: 2, sessionLength: 23 },
  ],
};

export const mockUserPerformance = {
  userId: 12,
  kind: {
    1: "cardio",
    2: "energy",
    3: "endurance",
  },
  data: [
    { value: 80, kind: 1 },
    { value: 120, kind: 2 },
  ],
};
