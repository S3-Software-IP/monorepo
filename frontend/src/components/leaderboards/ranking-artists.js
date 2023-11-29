import React, { useState, useEffect } from "react";
import { getTop50Artists } from "@/api/artist-service";
import Artist from "@/components/leaderboard-base-components/artist";

export default function Top50Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const apiData = (await getTop50Artists()).data;
        setArtists(apiData);
        console.log("API Data:", apiData);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetchArtists();
  }, []);

  return (
    <div className="grid grid-cols-5 gap-2 p-3 justify-center">
      {artists.length > 0 && artists[0].artists ? (
        artists[0].artists.map((artist) => (
          <div key={artist?.rank} className="flex flex-col items-center">
            <Artist
              index={artist?.rank}
              artist={artist?.artist}
              artistCoverURL={artist?.coverArtURL}
              artistSpotifyURL={artist?.spotifyUrl}
            />
          </div>
        ))
      ) : (
        <p>No artists available</p>
      )}
    </div>
  );
}
