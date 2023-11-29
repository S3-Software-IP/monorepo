import axios from "axios";

export async function getTop50Artists() {
  try {
    var userId = localStorage.getItem("userId");
    const response = await axios.get(
      `https://localhost:7065/snapshots/${userId}`
    );

    return response;
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    throw error;
  }
}
