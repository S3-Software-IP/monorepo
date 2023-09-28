import React from "react";
import Image from "next/image";
import spotifyLogo from "@/static/img/spotifyGreen.svg";

const Song = ({ index, title, artist, albumCoverURL, spotifySongURL }) => {
  return (
    <div className="p-2 w-full  mx-3">
      <div className="flex flex-row full items-center content-center">
        <div className="w-10 mx-2 my-0 text-right">{index}</div>{" "}
        <Image
          src={albumCoverURL}
          width={500}
          height={500}
          className="object-contain h-20 w-14 mx-1"
          alt="Album Cover"
        />
        <div className="w-2/6 mx-2">{title}</div>
        <div className="w-4/6 mx-2">{artist}</div>
        <a href={spotifySongURL} className="object-contain h-7 w-7 mx-2">
          <Image src={spotifyLogo} width={50} height={50} alt="Spotify Logo" />
        </a>
      </div>
    </div>
  );
};

export default Song;
