import axios from "axios";
let secrets;
try {
  secrets = require("@/../secrets.json");
} catch (error) {
  console.warn("Local secrets not found. Trying GitHub Secrets.");
  secrets = {
    CLIENT_ID: process.env.SPOTIFY_CLIENT_ID || process.env.GITHUB_SPOTIFY_CLIENT_ID,
    CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET || process.env.GITHUB_SPOTIFY_CLIENT_SECRET,
    REDIRECT_URI: process.env.SPOTIFY_REDIRECT_URI || process.env.GITHUB_SPOTIFY_REDIRECT_URI,
  };
}

const SPOTIFY_TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_ENDPOINT = "https://api.spotify.com/v1/me";

export const SpotifyService = {
  getAuthorizationToken: () => {
    const STATE = "your_random_state";
    const SCOPES = "user-read-private user-read-email user-top-read";
    const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${secrets.CLIENT_ID}&redirect_uri=${secrets.REDIRECT_URI}&scope=${SCOPES}&response_type=code&state=${STATE}`;
    window.location.href = LOGIN_URL;
  },

  setAccessToken: async function (authorizationCode, state) {
    const requestBody = new URLSearchParams();
    requestBody.append("grant_type", "authorization_code");
    requestBody.append("code", authorizationCode);
    requestBody.append("redirect_uri", secrets.REDIRECT_URI);

    await this.setAccessRefreshToken(requestBody);
  },

  checkAndRefreshAccessToken: async () => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      SpotifyService.getAuthorizationToken();
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      await axios
        .get(SPOTIFY_API_ENDPOINT, { headers })
        .then((response) => {
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("displayName", response.data.display_name);
          localStorage.setItem("userImageUrl", response.data.images[1].url);
          localStorage.setItem("email", response.data.email);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            const refreshToken = localStorage.getItem("refreshToken");
            const requestBody = new URLSearchParams();
            requestBody.append("grant_type", "refresh_token");
            requestBody.append("refresh_token", refreshToken);

            this.setAccessRefreshToken(requestBody);
          } else {
            console.log("Error", error.message);
          }
        });

      const homePageURL = `http://localhost:3000/`;
      window.location.href = homePageURL;
    } catch (error) {
      console.error("Error while checking or refreshing access token:", error);
    }
  },

  setAccessRefreshToken: async (requestBody) => {
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
};
