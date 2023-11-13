import { useEffect } from "react";

function AuthComponent() {
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      const loginUrl = "http://localhost:3000/login";
      window.location.href = loginUrl;
    }
  }, []);
}

export default AuthComponent;
