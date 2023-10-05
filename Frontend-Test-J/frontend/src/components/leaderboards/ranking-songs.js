import React, { useState, useEffect } from "react";
import { getTop50Songs_LongTerm } from "@/api/song-service";
import Song from "../leaderboard-base-components/song.js";

export default function Top50Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchTop50Songs = async () => {
      try {
        const apiData = await getTop50Songs_LongTerm();
        setSongs(apiData);
      } catch (error) {
        console.error("Error fetching top 50 songs:", error);
      }
    };

    fetchTop50Songs();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {songs?.map((song, index) => (
        <Song
          key={index}
          index={index + 1}
          title={song?.name}
          artist={song?.artists[0].name}
          albumCoverURL={song?.album.images[1].url}
          spotifySongURL={song?.external_urls.spotify}
        />
      ))}
    </div>
  );
}
