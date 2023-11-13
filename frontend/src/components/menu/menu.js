import React from "react";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col mx-5 my-10 text-white bg-blue-500 rounded-lg divide-y-2 divide-blue-600 divide-dotted content-center ">
        <div>
          <div className="p-4">
            We implement the Spotify API to access your data. Please review our
            (INSERT URL REFERENCE) to review how we handle your data.
          </div>
        </div>
        <div>
          <div className="p-4">
            I am ALSO somehow very relevant to the items you are accessing here.
          </div>
        </div>
      </div>
    </>
  );
}
