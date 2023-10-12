import React from "react";
import SpotifyLoginButton from "@/api/SpotifyLoginButton";
import GetTopNumbersButton from "@/api/GetTopNumbers";

export default function Menu() {
  return (
    <>
      <div className="flex flex-col mx-5 my-10 text-white bg-blue-500 rounded-lg divide-y-2 divide-blue-600 divide-dotted content-center ">
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
        <div className="p-4 flex flex-col">
          <SpotifyLoginButton></SpotifyLoginButton>
        </div>
      </div>
    </>
  );
}
