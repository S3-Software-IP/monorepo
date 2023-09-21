export async function getTop50SongsAllTime() {
  const songs = [
    {
      artist: "Taylor Kakkiewakkie",
      title: "Love Story",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Ed Sheeran",
      title: "Shape of You",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Adele",
      title: "Hello",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Billie Eilish",
      title: "Bad Guy",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Post Malone",
      title: "Sunflower",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Maroon 5",
      title: "Sugar",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Drake",
      title: "God's Plan",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Lizzo",
      title: "Truth Hurts",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Shawn Mendes",
      title: "Señorita",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Khalid",
      title: "Young Dumb & Broke",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Imagine Dragons",
      title: "Radioactive",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Ariana Grande",
      title: "Thank U, Next",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Beyoncé",
      title: "Halo",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "The Weeknd",
      title: "Blinding Lights",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Sia",
      title: "Chandelier",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "John Legend",
      title: "All of Me",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Camila Cabello",
      title: "Havana",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Justin Bieber",
      title: "Sorry",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Eminem",
      title: "Lose Yourself",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Dua Lipa",
      title: "New Rules",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Coldplay",
      title: "Fix You",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Rihanna",
      title: "Diamonds",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Sam Smith",
      title: "Stay With Me",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Alicia Keys",
      title: "If I Ain't Got You",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Lil Nas X",
      title: "Old Town Road",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Panic! At The Disco",
      title: "High Hopes",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Cardi B",
      title: "Bodak Yellow",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Travis Scott",
      title: "SICKO MODE",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Katy Perry",
      title: "Roar",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Halsey",
      title: "Without Me",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "The Chainsmokers",
      title: "Closer",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Selena Gomez",
      title: "Lose You to Love Me",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Twenty One Pilots",
      title: "Stressed Out",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Ava Max",
      title: "Sweet but Psycho",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Imagine Dragons",
      title: "Believer",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Lady Gaga",
      title: "Shallow",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "OneRepublic",
      title: "Counting Stars",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Bruno Mars",
      title: "Uptown Funk",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Pink",
      title: "Just Give Me a Reason",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Kesha",
      title: "Tik Tok",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Kendrick Lamar",
      title: "HUMBLE.",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Jonas Brothers",
      title: "Sucker",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Harry Styles",
      title: "Watermelon Sugar",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Zedd",
      title: "The Middle",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Ariana Grande",
      title: "7 Rings",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
    {
      artist: "Justin Timberlake",
      title: "Can't Stop the Feeling!",
      albumCoverURL: "https://avatars.githubusercontent.com/u/1336023?v=4",
    },
  ];

  return songs;
}

export async function getTop50SongsLastMonth() {}
export async function getTop50Songs6Months() {}
