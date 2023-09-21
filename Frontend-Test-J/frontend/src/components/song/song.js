import React from "react";

const Song = ({ index, title, artist, albumCoverURL }) => {
  return (
    <div className="w-1/2 p-4 mb-4 bg-blue-600 rounded-lg">
      <div className="mb-2 flex flex-col items-start">
        <img
          src={albumCoverURL}
          className="object-contain h-48 w-96"
          alt="Album Cover"
        />
        <div className="w-auto px-1">{index}.</div>
        <div className="w-2/6">{title}</div>
        <div className="w-4/6">{artist}</div>
      </div>
    </div>
  );
};

export default Song;
