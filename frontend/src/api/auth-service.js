import axios from "axios";

export async function getMe(userId) {
  try {
    const response = await axios.get(`https://localhost:7065/me/${userId}`);

    return response;
  } catch (error) {
    console.error(`Error fetching user ${userId}: `, error);
  }
}

export async function postMe(userData) {
  try {
    const response = await axios.post(
      `https://localhost:7065/me/${userData.spotifyUserId}`,
      userData
    );

    return response;
  } catch (error) {
    console.error("Error creating a new user.", error);
    throw error;
  }
}
