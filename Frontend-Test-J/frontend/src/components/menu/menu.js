import React from "react";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col mx-5 my-10 bg-blue-500 rounded-lg divide-y-2 divide-blue-600 divide-dotted content-center ">
        <div>
          <div className="p-4">
            I am some relevant text in the menu. Look at me!
          </div>
        </div>
        <div>
          <div className="p-4">
            I am ALSO somehow very relevant to the items you are accessing here.
          </div>
        </div>
        <div className="p-4">
          <button className="flex p-4 mx-auto my-2 bg-blue-600 rounded text-white">
            Retrieve top artists
          </button>

          <button className="flex p-4 mx-auto bg-blue-600 rounded text-white">
            Retrieve top songs
          </button>
        </div>
      </div>
    </>
  );
}
