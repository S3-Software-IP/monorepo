import React, { useState, useEffect } from "react";
import { getGenres_Artists } from "@/api/genre-service";
import Genre from "@/components/leaderboard-base-components/genre";

export default function GenreRankings() {
  const [artistGenres, setArtistGenres] = useState([]);

  useEffect(() => {
    const fetchGenres_artists_longTerm = async () => {
      try {
        const apiData = await getGenres_Artists("long_term");
        setArtistGenres(apiData || []);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchGenres_artists_longTerm();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div>
          Artist based
          {artistGenres?.slice(0, 50).map((genre, index) => (
            <div key={index}>
              <Genre index={index + 1} genre={genre} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
