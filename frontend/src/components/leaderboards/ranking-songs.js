import React, { useState, useEffect } from "react";
import { GetAllSnapshots } from "@/api/snapshot-service";
import Song from "@/components/leaderboard-base-components/song.js";

export default function Top50Songs() {
  const [snapshots, setSnapshots] = useState([]);

  useEffect(() => {
    const fetchTop50Songs = async () => {
      try {
        const apiData = await GetAllSnapshots();
        setSnapshots(apiData);
        console.log("Artists:", apiData);
      } catch (error) {
        console.error("Error fetching top 50 songs:", error);
      }
    };

    fetchTop50Songs();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {snapshots.length > 0 && snapshots[0].songs ? (
        snapshots[0].songs.map((song) => (
          <Song
            key={song.rank}
            index={song.rank}
            title={song?.song}
            artist={song?.artist}
            albumCoverURL={song?.coverArtURL}
            spotifySongURL={song?.spotifyUrl}
          />
        ))
      ) : (
        <p>No tracks available</p>
      )}
    </div>
  );
}
