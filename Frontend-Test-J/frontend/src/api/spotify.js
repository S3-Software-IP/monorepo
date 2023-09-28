import React from 'react';

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUrl = "https://localhost:3000/";
const clientId = "e840dbeda33e49f2a9d7a4a4a1809401";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

function SpotifyLoginButton() {
  const handleLoginClick = () => {
    window.location.href = loginUrl;
  };

  return (
    <button
      className="flex items-center justify-center p-3 mx-auto my-2 bg-green-500 hover:bg-green-600 rounded-lg text-black shadow-md"
      onClick={handleLoginClick}
    >
      <img
        src="https://static.vecteezy.com/system/resources/previews/022/100/989/non_2x/spotify-logo-transparent-free-png.png"
        alt="Spotify Logo"
        className="w-8 h-8 mr-2"
      />
      <span className="text-lg">Login with Spotify</span>
    </button>
  );
}

export default SpotifyLoginButton;
