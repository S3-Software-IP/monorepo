import { useEffect } from "react";
import { getMe, postMe } from "@/api/auth-service";

function AuthComponent() {
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      const loginUrl = "http://localhost:3000/login";
      window.location.href = loginUrl;
    }

    checkAndSetDB(userId);
  }, []);
}

const checkAndSetDB = async (userId) => {
  try {
    let results = await getMe(userId);

    if (results.data == null || results.data == "") {
      console.log("User not found, posting new user...");
      const spotifyId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");
      const authToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      const userData = {
        id: "00000000-0000-0000-0000-000000000000",
        spotifyUserId: userId,
        email: email,
        authToken: authToken,
        refreshToken: refreshToken,
      };

      var createdUser = await postMe(userData);
      console.warn(createdUser);
    }

    if (results.status == 200 || results.status == "200") {
      console.info("Succesfully retrieved user: ", results.data);
    }
  } catch (error) {
    console.error("Database error: ", error);
  }
};

export default AuthComponent;
