import axios from "axios";
const secrets = require("@/../../secrets.json");

const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_ENDPOINT = "https://api.spotify.com/v1/me";

export const SpotifyService = {
  getAuthorizationToken: () => {
    const STATE = "your_random_state";
    const SCOPES = "user-read-private user-read-email";
    const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${secrets.CLIENT_ID}&redirect_uri=${secrets.REDIRECT_URI}&scope=${SCOPES}&response_type=code&state=${STATE}`;
    window.location.href = LOGIN_URL;
  },

  setAccessToken: async (code, state) => {
    const requestBody = new URLSearchParams();
    requestBody.append("grant_type", "authorization_code");
    requestBody.append("code", code);
    requestBody.append("redirect_uri", secrets.REDIRECT_URI);

    const headers = {
      Authorization:
        "Basic " +
        new Buffer.from(
          secrets.CLIENT_ID + ":" + secrets.CLIENT_SECRET
        ).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    };

    axios
      .post(SPOTIFY_TOKEN_ENDPOINT, requestBody, { headers })
      .then((response) => {
        localStorage.setItem("accessToken", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
      })
      .catch((error) => {
        console.error("Error while fetching access token:", error);
        throw error;
      });
  },

  checkAndRefreshAccessToken: async () => {
    console.warn("Check and refresh");
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      SpotifyService.getAuthorizationToken();
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await axios.get(SPOTIFY_API_ENDPOINT, { headers });

      if (response.status === 200) {
        console.log("Access token is valid");
      } else {
        // If the access token is invalid, refresh it using the refresh token
        // Call a function to refresh the access token here (you can add the code)
      }
    } catch (error) {
      console.error("Error while checking access token:", error);

      if (error.response && error.response.status === 401) {
        // If the access token is invalid, refresh it using the refresh token
        // Call a function to refresh the access token here (you can add the code)
      } else {
        // Handle other errors as needed
      }
    }
  },
};
