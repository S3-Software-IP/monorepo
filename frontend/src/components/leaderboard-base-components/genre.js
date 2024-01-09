import React from "react";

const Genre = ({ genre }) => {
  return (
    <div className="p-2 w-full  mx-3" data-testid="genre">
      <div className="flex flex-row full items-center content-center">
        <div className="w-10 mx-2 my-0 text-right">{index}</div>{" "}
        <div className="w-2/6 mx-2">{genre[0]}</div>
      </div>
    </div>
  );
};

export default Genre;
