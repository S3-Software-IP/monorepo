import axios from "axios";

export async function getTop50Songs_LongTerm() {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    const songs = response.data.items;
    return songs;
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    throw error; 
  }
}
