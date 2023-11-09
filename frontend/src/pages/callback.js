import { SpotifyService } from "@/services/SpotifyService.js";
import { useEffect } from "react";

export default function Callback() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (code && state) {
      SpotifyService.setAccessToken(code, state)
        .then(() => {
          refreshAccessToken();
        })
        .catch((error) => {
          console.error("Error setting access token:", error);
        });
    }
  }, []);

  const refreshAccessToken = async () => {
    try {
      await SpotifyService.checkAndRefreshAccessToken();
    } catch (error) {
      console.error("Error refreshing access token:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-neutral-900">
      <p className="text-white">Loading... Callback in progress</p>
    </div>
  );
}
