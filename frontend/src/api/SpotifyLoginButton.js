import React, { useEffect, useState } from "react";
import axios from "axios";

const CLIENT_ID = "e840dbeda33e49f2a9d7a4a4a1809401";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000";
const SPOTIFY_REFRESH_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const SCOPES_DELIMITER = "%20";
const SCOPES = ["user-top-read"];

SCOPES.push("user-read-private");
SCOPES.push("user-read-email");

const SCOPES_URL_PARAM = SCOPES.join(SCOPES_DELIMITER);

const SpotifyLoginButton = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");

    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    } else if (window.location.hash) {
      const { access_token, expires_in, token_type } =
        GetReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);

      setAccessToken(access_token);
    }
  }, []);

  const handleLogin = () => {
    const loginUrl = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    window.location.href = loginUrl;
  };

  const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      const response = await axios.post(`${SPOTIFY_REFRESH_TOKEN_ENDPOINT}`, {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      });

      const { access_token, expires_in } = response.data;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("expiresIn", expires_in);

      setAccessToken(access_token);
    } catch (error) {}
  };

  const makeAuthorizedRequest = async (url) => {
    if (!accessToken) {
      await refreshAccessToken();
    }

    const updatedAccessToken = localStorage.getItem("accessToken");

    try {
      const response = await axios.get(`${SPOTIFY_API_BASE_URL}/${url}`, {
        headers: {
          Authorization: `Bearer ${updatedAccessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error making authorized request:", error);
    }
  };

  const handleFetchUserData = async () => {
    try {
      const userData = await makeAuthorizedRequest("me");
      console.log("User data:", userData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleFetchUserTop50Tracks = async () => {
    try {
      const response = await makeAuthorizedRequest("me/top/tracks?limit=10");
      const topTracksData = response.items;
      setTopTracks(topTracksData);
    } catch (error) {
      console.error("Error fetching top tracks:", error);
    }
  };

  return (
    <div className="container">
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          <button
            className="flex p-4 bg-green-600 rounded text-white"
            onClick={handleLogin}
          >
            Login with Spotify
          </button>
        </li>
        <li></li>
      </ol>
    </div>
  );
};

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

export default SpotifyLoginButton;
