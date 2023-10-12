import {
  getTop50Artists_LongTerm,
  getTop50Artists_MediumTerm,
  getTop50Artists_ShortTerm,
} from "@/api/artist-service";

export async function getGenres_Artists(time_range) {
  let spotifyData;

  switch (time_range) {
    case "long_term":
      try {
        spotifyData = await getTop50Artists_LongTerm();
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
      break;

    case "medium_term":
      try {
        spotifyData = await getTop50Artists_MediumTerm();
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
      break;

    case "short_term":
      try {
        spotifyData = await getTop50Artists_ShortTerm();
      } catch (error) {
        console.error("Error fetching Spotify data:", error);
      }
      break;

    default:
      console.log("You've forgotten to add parameters");
      break;
  }

  const mergedGenres = mergeGenres(spotifyData);
  const genreArray = Object.entries(mergedGenres);
  const sortedGenres = genreArray.sort((a, b) => b[1] - a[1]);

  return sortedGenres;
}

function mergeGenres(genreArray) {
  const mergedGenres = {};
  genreArray.forEach((item) => {
    item.genres.forEach((genre) => {
      if (mergedGenres[genre]) {
        mergedGenres[genre] += 1;
      } else {
        mergedGenres[genre] = 1;
      }
    });
  });

  return mergedGenres;
}
