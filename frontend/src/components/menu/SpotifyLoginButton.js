import { SpotifyService } from "@/api/SpotifyService.js";
import { useEffect, useState } from "react";

function MyComponent() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    let accessTokenValue = localStorage.getItem("accessToken");
    setAccessToken(accessTokenValue);

    if (code && state) {
      SpotifyService.setAccessToken(code, state);
    }
  }, []);

  const handleAuthorize = () => {
    SpotifyService.getAuthorizationToken();
  };

  return (
    <div>
      {accessToken ? (
        <p>Access Token is already set</p>
      ) : (
        <button onClick={handleAuthorize}>Authorize with Spotify</button>
      )}
    </div>
  );
}

export default MyComponent;
