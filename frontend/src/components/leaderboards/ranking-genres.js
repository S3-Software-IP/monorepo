import React, { useState, useEffect } from "react";
import { GetAllSnapshots } from "@/api/snapshot-service";
import Genre from "@/components/leaderboard-base-components/genre";

export default function GenreRankings() {
  const [snapshots, setSnapshots] = useState([]);

  useEffect(() => {
    const fetchGenres_artists_longTerm = async () => {
      try {
        const apiData = await GetAllSnapshots();
        console.log(apiData);
        setSnapshots(apiData);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchGenres_artists_longTerm();
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div>
        {snapshots.length > 0 && snapshots[0].genres ? (
          snapshots[0].genres.map((genre) => (
            <div key={genre.rank}>
              <Genre genre={genre} />
            </div>
          ))
        ) : (
          <p>No genres available</p>
        )}
      </div>
    </div>
  );
}
