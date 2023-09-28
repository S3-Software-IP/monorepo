import React, { useState, useEffect } from "react";
import { getTop50Artists_LongTerm } from "@/api/artist-service";
import Artist from "@/components/leaderboard-base-components/artist";

export default function Top50Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetch50Artist6Months = async () => {
      try {
        const apiData = await getTop50Artists_LongTerm();
        setArtists(apiData?.items || []);
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
    };

    fetch50Artist6Months();
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-2 p-3 justify-center">
        {artists?.map((artist, index) => (
          <div key={index} className="flex flex-col items-center">
            <Artist
              index={index + 1}
              artist={artist?.name}
              artistCoverURL={artist?.images[1].url}
              artistSpotifyURL={artist?.external_urls.spotify}
            />
          </div>
        ))}
      </div>
    </>
  );
}
