import React, { useEffect } from "react";

const CLIENT_ID = "e840dbeda33e49f2a9d7a4a4a1809401";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";

const SCOPES_DELIMITER = "%20";
const SCOPES = ["user-top-read", "user-read-currently-playing"];
const SCOPES_URL_PARAM = SCOPES.join(SCOPES_DELIMITER);



const GetReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashing = hash.substring(1);
  const paramsInUrl = stringAfterHashing.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulater[key] = value;
    return accumulater;
  }, {});

  return paramsSplitUp;
};

const SpotifyLoginButton = () => {
  useEffect(() => {
    if(window.location.hash) {
      const 
      {
        access_token, 
        expires_in, 
        token_type
      }
      = GetReturnedParamsFromSpotifyAuth(window.location.hash);
      
      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  const handleLogin = () =>  {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scopes=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`
  }
  return (
    <div className="container">
        <button className="flex items-center justify-center p-3 mx-auto my-2 bg-green-500 hover:bg-green-600 rounded-lg text-black shadow-md"
        onClick={handleLogin}>
            Login with Spotify
        </button>
    </div>
  )
}

export default SpotifyLoginButton