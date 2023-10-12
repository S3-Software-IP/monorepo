import React, { useEffect, useState } from "react";

const API_ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
const LIMIT = 40;

const GetTopArtists = () => {
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      fetch(`${API_ENDPOINT}?limit=${LIMIT}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setTopArtists(data.items);
        })
        .catch((error) => {
          console.error("Error fetching top artists:", error);
        });
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
        button
    </div>
  );
};

export default GetTopArtists;
