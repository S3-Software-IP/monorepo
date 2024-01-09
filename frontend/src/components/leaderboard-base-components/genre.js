import React from "react";

const Genre = ({ genre }) => {
  return (
    <div className="mb-1 items-center" data-testid="genre">
      <div className="mb-2 flex flex-col">
        <div className="w-full text-left p-2 px-6">
          {genre.rank}. {genre.genre}
        </div>
      </div>
    </div>
  );
};

export default Genre;
