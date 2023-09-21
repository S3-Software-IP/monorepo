import React, { useState, useEffect } from "react";
import { getTop50SongsAllTime } from "../../api/SongService";
import Song from "../song/song.js";

export default function Top50Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchTop50Songs = async () => {
      try {
        const top50Songs = await getTop50SongsAllTime();
        setSongs(top50Songs);
      } catch (error) {
        console.error("Error fetching top 50 songs:", error);
      }
    };

    fetchTop50Songs();
  }, []);

  return (
    <>
      <h1 className="text-center my-4">Your top 50 most listened songs</h1>
      <div className="flex flex-col items-center">
        {songs.map((song, index) => (
          <Song
            key={index}
            index={index}
            title={song.title}
            artist={song.artist}
            albumCoverURL={song.albumCoverURL}
          />
        ))}
      </div>
    </>
  );
}
