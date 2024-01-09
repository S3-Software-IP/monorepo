import React from "react";
import Image from "next/image";

const Artist = ({ index, artist, artistCoverURL, artistSpotifyURL }) => {
  return (
    <div className="mb-1 items-center" data-testid="artist">
      <div className="mb-2 flex flex-col">
        <a href={artistSpotifyURL}>
          <Image
            src={artistCoverURL}
            width={500}
            height={500}
            className="h-40 w-40 m-2 rounded-lg"
            alt="Artist image"
          />
        </a>

        <div className="w-full text-center">
          {index}. {artist}
        </div>
      </div>
    </div>
  );
};

export default Artist;
