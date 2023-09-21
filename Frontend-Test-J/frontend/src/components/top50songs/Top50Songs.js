import React, { useState, useEffect } from "react";
import { getTop50SongsAllTime } from "../../api/SongService";

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
      <div className="flex flex-col md:flex-col items-center">
        {songs.map((song, index) => (
          <div key={index} className="md:w-1/2 p-4 mb-4 bg-blue-600 rounded-lg">
            <span className="block mb-2">
              {index + 1} - {song.title} - {song.artist}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
