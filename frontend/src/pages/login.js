import { SpotifyService } from "@/services/SpotifyService.js";
import { useEffect, useState } from "react";

export default function Login() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const homepageURL = "http://localhost:3000/";
        window.location.href = homepageURL;
      }

      let accessTokenValue = localStorage.getItem("accessToken");
      setAccessToken(accessTokenValue);
    };

    fetchData();
  }, []);

  const handleAuthorize = async () => {
    await SpotifyService.getAuthorizationToken();
  };

  return (
    <main>
      <div className="flex justify-center items-center h-screen bg-neutral-900">
        <button
          className={`bg-green-400 rounded-full px-4 py-2 text-white ${
            accessToken ? "disabled" : ""
          }`}
          onClick={handleAuthorize}
          disabled={accessToken}
        >
          I'd love for you to invade my privacy. Please.
        </button>
      </div>
    </main>
  );
}
