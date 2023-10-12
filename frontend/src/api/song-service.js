import axios from "axios";

const minRangeLimit = 1;
const maxRangeLimit = 50;
const timeRangeOptions = ["long_term", "medium_term", "short_term"];

export async function getTop50Songs_LongTerm(rangeLimit, timeRange) {
  if (rangeLimit < minRangeLimit && rangeLimit >= maxRangeLimit) {
    console.error("The given time range does not match Spotify's min/max.");
    return;
  }

  if (timeRangeOptions.includes(timeRange)) {
  }

  if (timeRange <= 0 && rangeLimit >= 51) {
    console.error("The given time range does not match Spotify's min/max.");
    return;
  }

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
