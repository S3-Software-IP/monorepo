import React, { useEffect } from "react";
import axios from "axios";

const CLIENT_ID = "e840dbeda33e49f2a9d7a4a4a1809401";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";

const SCOPES_DELIMITER = "%20";
const SCOPES = ["user-top-read"];
const SCOPES_URL_PARAM = SCOPES.join(SCOPES_DELIMITER);

const GetReturnedParamsFromSpotifyAuth = (hash) => {
  const stringAfterHashing = hash.substring(1);
  const paramsInUrl = stringAfterHashing.split("&");
  const paramsSplitUp = paramsInUrl.reduce((accumulator, currentValue) => {
    const [key, value] = currentValue.split("=");
    accumulator[key] = value;
    return accumulator;
  }, {});

  return paramsSplitUp;
};

const SpotifyLoginButton = () => {
  useEffect(() => {
    const handleLogin = () => {
      const loginUrl = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;

      // Check if access token is already in localStorage
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        window.location.href = loginUrl;
      }
    };

    if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        GetReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }

    handleLogin();
  }, []);

  return (
    <div className="container">
      <button
        className="flex items-center justify-center p-3 mx-auto my-2 bg-green-500 hover:bg-green-600 rounded-lg text-black shadow-md"
        onClick={() => {}}
        disabled
      >
        Login with Spotify
      </button>
    </div>
  );
};

export default SpotifyLoginButton;
