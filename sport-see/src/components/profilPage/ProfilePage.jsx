import React, { useEffect, useState } from "react";
import { getUserData } from "../../services/api";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(12);
        setUserData(data);
      } catch (err) {
        setError("failed to load user data");
      }
    };
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!userData) return <p>Loading...</p>;
  return (
    <div>
      <h1>
        Bonjour <span>{userData.userInfos.firstName}</span>
      </h1>
    </div>
  );
};

export default ProfilePage;
