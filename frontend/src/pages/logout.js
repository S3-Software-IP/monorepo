import React, { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    const logOut = () => {
      localStorage.clear();
      const loginUrl = "http://localhost:3000/login";
      window.location.href = loginUrl;
    };

    logOut();
  }, []);

  return (
    <div>
      <p>Logging you out...</p>
    </div>
  );
}
