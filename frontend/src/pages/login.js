import { SpotifyService } from "@/services/SpotifyService.js";
import { useEffect, useState } from "react";

export default function Login() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const loginUrl = "http://localhost:3000/";
      window.location.href = loginUrl;
    }

    let accessTokenValue = localStorage.getItem("accessToken");
    setAccessToken(accessTokenValue);
  }, []);

  const handleAuthorize = () => {
    SpotifyService.getAuthorizationToken();
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
          Log me in, fuck my privacy. Sell all my data and/or organs.
        </button>
      </div>
    </main>
  );
}
