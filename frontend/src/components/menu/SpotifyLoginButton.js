import { SpotifyService } from "@/services/SpotifyService.js";
import { useEffect, useState } from "react";

function AuthComponent() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    let accessTokenValue = localStorage.getItem("accessToken");
    setAccessToken(accessTokenValue);
    console.log("Access token: " + accessToken);
  }, []);

  const handleAuthorize = () => {
    SpotifyService.getAuthorizationToken();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className={`bg-green-400 rounded-full px-4 py-2 text-white ${
          accessToken ? "disabled" : ""
        }`}
        onClick={handleAuthorize}
        disabled={accessToken}
      >
        Authorize with Spotify
      </button>
    </div>
  );
}

export default AuthComponent;
