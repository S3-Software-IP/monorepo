import React, { useState } from "react";
import Top50Songs from "@/components/leaderboards/ranking-songs";
import Top50Artists from "@/components/leaderboards/ranking-artists";
import GenreRankings from "@/components/leaderboards/ranking-genres";

export default function Top50Group() {
  const [displayType, setDisplayType] = useState("");

  function handleDisplayClick(display) {
    setDisplayType(display);
  }

  return (
    <div className="my-2">
      <div className="px-2 flex flex-row flex-wrap bg-neutral-800">
        <button
          onClick={() => handleDisplayClick("artists")}
          className={`flex flex-row p-4 mx-auto my-2 rounded text-white ${
            displayType === "artists" ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          Artists
        </button>

        <button
          onClick={() => handleDisplayClick("songs")}
          className={`flex p-4 mx-auto my-2 rounded text-white ${
            displayType === "songs" ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          Songs
        </button>

        <button
          onClick={() => handleDisplayClick("genres")}
          className={`flex p-4 mx-auto my-2 rounded text-white ${
            displayType === "genres" ? "bg-blue-600" : "bg-blue-400"
          }`}
        >
          Genres
        </button>
      </div>

      <div className="mx-auto my-auto text-white">
        {displayType === "artists" && <Top50Artists />}
        {displayType === "songs" && <Top50Songs />}
        {displayType === "genres" && <GenreRankings />}
      </div>
    </div>
  );
}
