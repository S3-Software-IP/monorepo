import React, { useState } from "react";
import Top50Songs from "./ranking-songs";
import Top50Artists from "./ranking-artists";
import GenreRankings from "@/components/leaderboards/ranking-genres";

export default function Top50Group() {
  const [displayType, setDisplayType] = useState("artists");

  function handleDisplayClick(display) {
    setDisplayType(display);
  }

  return (
    <>
      <div className="my-5 mx-auto content-start">
        <div className="p-4 flex flex-row flex-wrap  bg-neutral-800">
          <button
            onClick={() => handleDisplayClick("artists")}
            className={`flex flex-row p-4 mx-auto my-2 ${
              displayType === "artists" ? "bg-blue-600" : "bg-blue-400"
            } rounded text-white`}
          >
            Artists
          </button>

          <button
            onClick={() => handleDisplayClick("songs")}
            className={`flex p-4 mx-auto my-2 ${
              displayType === "songs" ? "bg-blue-600" : "bg-blue-400"
            } rounded text-white`}
          >
            Songs
          </button>

          <button
            onClick={() => handleDisplayClick("genres")}
            className={`flex p-4 mx-auto my-2 ${
              displayType === "genres" ? "bg-blue-600" : "bg-blue-400"
            } rounded text-white `}
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
    </>
  );
}
