import axios from "axios";

export async function getTop50Artists_LongTerm() {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    const artists = response.data.items;
    return artists;
  } catch (error) {
    console.error("Error fetching top tracks:", error);
    throw error;
  }
}

export async function getTop50Artists_MediumTerm() {
  const artists = {
    items: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4rZJKub3qA5t1yYcT3qmm4",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dutch indie", "dutch indie rock", "dutch rock"],
        href: "https://api.spotify.com/v1/artists/4rZJKub3qA5t1yYcT3qmm4",
        id: "4rZJKub3qA5t1yYcT3qmm4",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebdd0893fa3bb5014e5e3f6d16",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174dd0893fa3bb5014e5e3f6d16",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178dd0893fa3bb5014e5e3f6d16",
            width: 160,
          },
        ],
        name: "De Staat",
        popularity: 40,
        type: "artist",
        uri: "spotify:artist:4rZJKub3qA5t1yYcT3qmm4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "garage rock",
          "modern rock",
          "permanent wave",
          "rock",
          "sheffield indie",
        ],
        href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
        id: "7Ln80lUS6He07XvHI8qqHH",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1787da39dea0a72f581535fb11f",
            width: 160,
          },
        ],
        name: "Arctic Monkeys",
        popularity: 85,
        type: "artist",
        uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7kAZYW5e5hQHYGQ0XHYhns",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["indie garage rock", "miami indie"],
        href: "https://api.spotify.com/v1/artists/7kAZYW5e5hQHYGQ0XHYhns",
        id: "7kAZYW5e5hQHYGQ0XHYhns",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc92228b7c4d48684820d79b4",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c92228b7c4d48684820d79b4",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c92228b7c4d48684820d79b4",
            width: 160,
          },
        ],
        name: "Mustard Service",
        popularity: 47,
        type: "artist",
        uri: "spotify:artist:7kAZYW5e5hQHYGQ0XHYhns",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["ann arbor indie", "funk rock", "instrumental funk"],
        href: "https://api.spotify.com/v1/artists/7pXu47GoqSYRajmBCjxdD6",
        id: "7pXu47GoqSYRajmBCjxdD6",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb3f8c36a57018e5221c8c458c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051743f8c36a57018e5221c8c458c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1783f8c36a57018e5221c8c458c",
            width: 160,
          },
        ],
        name: "Vulfpeck",
        popularity: 57,
        type: "artist",
        uri: "spotify:artist:7pXu47GoqSYRajmBCjxdD6",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["piano rock"],
        href: "https://api.spotify.com/v1/artists/0JyCM9EwjQZZzQPGTSM1qc",
        id: "0JyCM9EwjQZZzQPGTSM1qc",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb4c0c7787467fbdeee2826d46",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051744c0c7787467fbdeee2826d46",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1784c0c7787467fbdeee2826d46",
            width: 160,
          },
        ],
        name: "The Reign of Kindo",
        popularity: 30,
        type: "artist",
        uri: "spotify:artist:0JyCM9EwjQZZzQPGTSM1qc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7FhRUp59cBzPaxobsRY1Nc",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["la pop"],
        href: "https://api.spotify.com/v1/artists/7FhRUp59cBzPaxobsRY1Nc",
        id: "7FhRUp59cBzPaxobsRY1Nc",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb34074c27de56175d724b9f46",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517434074c27de56175d724b9f46",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17834074c27de56175d724b9f46",
            width: 160,
          },
        ],
        name: "Bay Ledges",
        popularity: 55,
        type: "artist",
        uri: "spotify:artist:7FhRUp59cBzPaxobsRY1Nc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["australian psych", "modern rock", "neo-psychedelic", "rock"],
        href: "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
        id: "5INjqkS1o8h1imAzPqGZBb",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb90357ef28b3a012a1d1b2fa2",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517490357ef28b3a012a1d1b2fa2",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17890357ef28b3a012a1d1b2fa2",
            width: 160,
          },
        ],
        name: "Tame Impala",
        popularity: 79,
        type: "artist",
        uri: "spotify:artist:5INjqkS1o8h1imAzPqGZBb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/33tFkBLsl6f8TjKkV0uF0C",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["pixel", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/33tFkBLsl6f8TjKkV0uF0C",
        id: "33tFkBLsl6f8TjKkV0uF0C",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb22689a583f664fe0306f2644",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517422689a583f664fe0306f2644",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17822689a583f664fe0306f2644",
            width: 160,
          },
        ],
        name: "Lovejoy",
        popularity: 67,
        type: "artist",
        uri: "spotify:artist:33tFkBLsl6f8TjKkV0uF0C",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["electro", "filter house", "rock"],
        href: "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
        id: "4tZwfgrHOc3mvqYlEYSvVi",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba7bfd7835b5c1eee0c95fa6e",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a7bfd7835b5c1eee0c95fa6e",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a7bfd7835b5c1eee0c95fa6e",
            width: 160,
          },
        ],
        name: "Daft Punk",
        popularity: 79,
        type: "artist",
        uri: "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2vnB6tuQMaQpORiRdvXF9H",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["bubblegrunge", "chicago indie", "indie pop", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/2vnB6tuQMaQpORiRdvXF9H",
        id: "2vnB6tuQMaQpORiRdvXF9H",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebbf42b607fb398365296230b0",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174bf42b607fb398365296230b0",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178bf42b607fb398365296230b0",
            width: 160,
          },
        ],
        name: "Beach Bunny",
        popularity: 67,
        type: "artist",
        uri: "spotify:artist:2vnB6tuQMaQpORiRdvXF9H",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4gHs8pWsgZpndQZKs6QVRH",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["5th wave emo", "modern power pop"],
        href: "https://api.spotify.com/v1/artists/4gHs8pWsgZpndQZKs6QVRH",
        id: "4gHs8pWsgZpndQZKs6QVRH",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb73e3c21e4c39c2710e7496e7",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517473e3c21e4c39c2710e7496e7",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17873e3c21e4c39c2710e7496e7",
            width: 160,
          },
        ],
        name: "glass beach",
        popularity: 49,
        type: "artist",
        uri: "spotify:artist:4gHs8pWsgZpndQZKs6QVRH",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["alternative hip hop", "modern rock", "rock"],
        href: "https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ",
        id: "3AA28KZvwAUcZuOKwyblJQ",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb337d671a32b2f44d4a4e6cf2",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174337d671a32b2f44d4a4e6cf2",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178337d671a32b2f44d4a4e6cf2",
            width: 160,
          },
        ],
        name: "Gorillaz",
        popularity: 78,
        type: "artist",
        uri: "spotify:artist:3AA28KZvwAUcZuOKwyblJQ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6J7biCazzYhU3gM9j1wfid",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dance pop"],
        href: "https://api.spotify.com/v1/artists/6J7biCazzYhU3gM9j1wfid",
        id: "6J7biCazzYhU3gM9j1wfid",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb7e6dca959714339b69e9718d",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051747e6dca959714339b69e9718d",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1787e6dca959714339b69e9718d",
            width: 160,
          },
        ],
        name: "Jamiroquai",
        popularity: 66,
        type: "artist",
        uri: "spotify:artist:6J7biCazzYhU3gM9j1wfid",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4oDjh8wNW5vDHyFRrDYC4k",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["indie soul", "london rap"],
        href: "https://api.spotify.com/v1/artists/4oDjh8wNW5vDHyFRrDYC4k",
        id: "4oDjh8wNW5vDHyFRrDYC4k",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebad385f12e4046922f7441fa7",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ad385f12e4046922f7441fa7",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ad385f12e4046922f7441fa7",
            width: 160,
          },
        ],
        name: "Loyle Carner",
        popularity: 64,
        type: "artist",
        uri: "spotify:artist:4oDjh8wNW5vDHyFRrDYC4k",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6fC2AcsQtd9h4BWELbbire",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["pov: indie", "vancouver indie"],
        href: "https://api.spotify.com/v1/artists/6fC2AcsQtd9h4BWELbbire",
        id: "6fC2AcsQtd9h4BWELbbire",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb66fe5cb49c14d5cadb50ad50",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517466fe5cb49c14d5cadb50ad50",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17866fe5cb49c14d5cadb50ad50",
            width: 160,
          },
        ],
        name: "Peach Pit",
        popularity: 61,
        type: "artist",
        uri: "spotify:artist:6fC2AcsQtd9h4BWELbbire",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["pixel"],
        href: "https://api.spotify.com/v1/artists/4uFZsG1vXrPcvnZ4iSQyrx",
        id: "4uFZsG1vXrPcvnZ4iSQyrx",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba9b8234e3071836212561d19",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a9b8234e3071836212561d19",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a9b8234e3071836212561d19",
            width: 160,
          },
        ],
        name: "C418",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:4uFZsG1vXrPcvnZ4iSQyrx",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1JyLSGXC3aWzjY6ZdxvIXh",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["instrumental funk"],
        href: "https://api.spotify.com/v1/artists/1JyLSGXC3aWzjY6ZdxvIXh",
        id: "1JyLSGXC3aWzjY6ZdxvIXh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebec5aa75fe447103bc6588d58",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ec5aa75fe447103bc6588d58",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ec5aa75fe447103bc6588d58",
            width: 160,
          },
        ],
        name: "The Fearless Flyers",
        popularity: 46,
        type: "artist",
        uri: "spotify:artist:1JyLSGXC3aWzjY6ZdxvIXh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4V7Ate3UISn8cy06xnAprh",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["classic japanese jazz"],
        href: "https://api.spotify.com/v1/artists/4V7Ate3UISn8cy06xnAprh",
        id: "4V7Ate3UISn8cy06xnAprh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273b752bbaa0dd7578b736f7cc1",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02b752bbaa0dd7578b736f7cc1",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851b752bbaa0dd7578b736f7cc1",
            width: 64,
          },
        ],
        name: "Ryo Fukui",
        popularity: 45,
        type: "artist",
        uri: "spotify:artist:4V7Ate3UISn8cy06xnAprh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["hip hop", "pittsburgh rap", "pop rap", "rap"],
        href: "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
        id: "4LLpKhyESsyAXpc4laK94U",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ed3b89aa602145fde71a163a",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ed3b89aa602145fde71a163a",
            width: 160,
          },
        ],
        name: "Mac Miller",
        popularity: 82,
        type: "artist",
        uri: "spotify:artist:4LLpKhyESsyAXpc4laK94U",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2Ex4vjQ6mSh5woTlDWto6d",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/2Ex4vjQ6mSh5woTlDWto6d",
        id: "2Ex4vjQ6mSh5woTlDWto6d",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb67de313d580458daa8cae786",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517467de313d580458daa8cae786",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17867de313d580458daa8cae786",
            width: 160,
          },
        ],
        name: "Masayoshi Takanaka",
        popularity: 53,
        type: "artist",
        uri: "spotify:artist:2Ex4vjQ6mSh5woTlDWto6d",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "indie rock",
          "indietronica",
          "irish rock",
          "modern alternative rock",
          "modern rock",
          "northern irish indie",
        ],
        href: "https://api.spotify.com/v1/artists/536BYVgOnRky0xjsPT96zl",
        id: "536BYVgOnRky0xjsPT96zl",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb86faeb97a905a571b2c361a0",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517486faeb97a905a571b2c361a0",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17886faeb97a905a571b2c361a0",
            width: 160,
          },
        ],
        name: "Two Door Cinema Club",
        popularity: 67,
        type: "artist",
        uri: "spotify:artist:536BYVgOnRky0xjsPT96zl",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["instrumental rock"],
        href: "https://api.spotify.com/v1/artists/4vGrte8FDu062Ntj0RsPiZ",
        id: "4vGrte8FDu062Ntj0RsPiZ",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebdd353edbce04267bff979de6",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174dd353edbce04267bff979de6",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178dd353edbce04267bff979de6",
            width: 160,
          },
        ],
        name: "Polyphia",
        popularity: 63,
        type: "artist",
        uri: "spotify:artist:4vGrte8FDu062Ntj0RsPiZ",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2XzXLjXRSeFtsic4ieyLJy",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["pixel", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/2XzXLjXRSeFtsic4ieyLJy",
        id: "2XzXLjXRSeFtsic4ieyLJy",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2730c49b83c7df5d4f240b80678",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e020c49b83c7df5d4f240b80678",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d000048510c49b83c7df5d4f240b80678",
            width: 64,
          },
        ],
        name: "Wilbur Soot",
        popularity: 59,
        type: "artist",
        uri: "spotify:artist:2XzXLjXRSeFtsic4ieyLJy",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5Rl15oVamLq7FbSb0NNBNy",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["boy band", "pop"],
        href: "https://api.spotify.com/v1/artists/5Rl15oVamLq7FbSb0NNBNy",
        id: "5Rl15oVamLq7FbSb0NNBNy",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb5048d9616b459ef90f04b6d8",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051745048d9616b459ef90f04b6d8",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1785048d9616b459ef90f04b6d8",
            width: 160,
          },
        ],
        name: "5 Seconds of Summer",
        popularity: 76,
        type: "artist",
        uri: "spotify:artist:5Rl15oVamLq7FbSb0NNBNy",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6uIst176jhzooPMetg2rtH",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["la pop"],
        href: "https://api.spotify.com/v1/artists/6uIst176jhzooPMetg2rtH",
        id: "6uIst176jhzooPMetg2rtH",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb70354e98b7233819aee3da54",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517470354e98b7233819aee3da54",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17870354e98b7233819aee3da54",
            width: 160,
          },
        ],
        name: "Louis Cole",
        popularity: 48,
        type: "artist",
        uri: "spotify:artist:6uIst176jhzooPMetg2rtH",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["alternative rock", "modern rock", "permanent wave", "rock"],
        href: "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
        id: "12Chz98pHFMPJEknJQMWvI",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051740accbbe13e1aa147dd27671c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1780accbbe13e1aa147dd27671c",
            width: 160,
          },
        ],
        name: "Muse",
        popularity: 74,
        type: "artist",
        uri: "spotify:artist:12Chz98pHFMPJEknJQMWvI",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4UAW69682T7N0wrABUhqx0",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["hypnagogic pop", "oc indie"],
        href: "https://api.spotify.com/v1/artists/4UAW69682T7N0wrABUhqx0",
        id: "4UAW69682T7N0wrABUhqx0",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc0fcdff62c745083539008a5",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c0fcdff62c745083539008a5",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c0fcdff62c745083539008a5",
            width: 160,
          },
        ],
        name: "Ginger Root",
        popularity: 51,
        type: "artist",
        uri: "spotify:artist:4UAW69682T7N0wrABUhqx0",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0lRXEutklZUeNdWIJA1NI0",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["japanese jazz", "japanese jazz fusion"],
        href: "https://api.spotify.com/v1/artists/0lRXEutklZUeNdWIJA1NI0",
        id: "0lRXEutklZUeNdWIJA1NI0",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273648478cb25e3e302454e40e1",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02648478cb25e3e302454e40e1",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851648478cb25e3e302454e40e1",
            width: 64,
          },
        ],
        name: "CASIOPEA",
        popularity: 49,
        type: "artist",
        uri: "spotify:artist:0lRXEutklZUeNdWIJA1NI0",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0Ya43ZKWHTKkAbkoJJkwIB",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["liverpool indie", "modern alternative rock", "modern rock"],
        href: "https://api.spotify.com/v1/artists/0Ya43ZKWHTKkAbkoJJkwIB",
        id: "0Ya43ZKWHTKkAbkoJJkwIB",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebb1dfda0b1915ee7f18683482",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174b1dfda0b1915ee7f18683482",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178b1dfda0b1915ee7f18683482",
            width: 160,
          },
        ],
        name: "The Wombats",
        popularity: 62,
        type: "artist",
        uri: "spotify:artist:0Ya43ZKWHTKkAbkoJJkwIB",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0I6yADrmeyvw66g7yjkqIF",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["otacore", "pixel", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/0I6yADrmeyvw66g7yjkqIF",
        id: "0I6yADrmeyvw66g7yjkqIF",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb686e3992aef97266d01b6c6f",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174686e3992aef97266d01b6c6f",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178686e3992aef97266d01b6c6f",
            width: 160,
          },
        ],
        name: "The Living Tombstone",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:0I6yADrmeyvw66g7yjkqIF",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0hQBkU2vuMYXucmd89JUSw",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/0hQBkU2vuMYXucmd89JUSw",
        id: "0hQBkU2vuMYXucmd89JUSw",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb32a643bdd831ab2e64243a56",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517432a643bdd831ab2e64243a56",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17832a643bdd831ab2e64243a56",
            width: 160,
          },
        ],
        name: "Tom Cardy",
        popularity: 58,
        type: "artist",
        uri: "spotify:artist:0hQBkU2vuMYXucmd89JUSw",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2Waw2sSbqvAwK8NwACNjVo",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["comic", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/2Waw2sSbqvAwK8NwACNjVo",
        id: "2Waw2sSbqvAwK8NwACNjVo",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb30d9a4acdf8cd3e8c0ad39ab",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517430d9a4acdf8cd3e8c0ad39ab",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17830d9a4acdf8cd3e8c0ad39ab",
            width: 160,
          },
        ],
        name: "Bo Burnham",
        popularity: 67,
        type: "artist",
        uri: "spotify:artist:2Waw2sSbqvAwK8NwACNjVo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/33s4eablBmnrPlE3y6CZFR",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dutch indie", "dutch rock", "lowlands hardcore"],
        href: "https://api.spotify.com/v1/artists/33s4eablBmnrPlE3y6CZFR",
        id: "33s4eablBmnrPlE3y6CZFR",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb25de3ad50eb64a1de9b23eca",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517425de3ad50eb64a1de9b23eca",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17825de3ad50eb64a1de9b23eca",
            width: 160,
          },
        ],
        name: "Hang Youth",
        popularity: 32,
        type: "artist",
        uri: "spotify:artist:33s4eablBmnrPlE3y6CZFR",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3GBPw9NK25X1Wt2OUvOwY3",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["neo mellow"],
        href: "https://api.spotify.com/v1/artists/3GBPw9NK25X1Wt2OUvOwY3",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb9555a0b3231117c8cde1fca7",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051749555a0b3231117c8cde1fca7",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1789555a0b3231117c8cde1fca7",
            width: 160,
          },
        ],
        name: "Jack Johnson",
        popularity: 74,
        type: "artist",
        uri: "spotify:artist:3GBPw9NK25X1Wt2OUvOwY3",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4CyxMgnF71FyOWADVWxJRE",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["progressive post-hardcore"],
        href: "https://api.spotify.com/v1/artists/4CyxMgnF71FyOWADVWxJRE",
        id: "4CyxMgnF71FyOWADVWxJRE",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebe94a46dea554a688ff32a887",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174e94a46dea554a688ff32a887",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178e94a46dea554a688ff32a887",
            width: 160,
          },
        ],
        name: "Strawberry Girls",
        popularity: 38,
        type: "artist",
        uri: "spotify:artist:4CyxMgnF71FyOWADVWxJRE",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1u7uShzlA1tXJeox3jMFPq",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dutch hip hop", "dutch pop", "dutch rock"],
        href: "https://api.spotify.com/v1/artists/1u7uShzlA1tXJeox3jMFPq",
        id: "1u7uShzlA1tXJeox3jMFPq",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb0eacdb361f079bb587c0893f",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051740eacdb361f079bb587c0893f",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1780eacdb361f079bb587c0893f",
            width: 160,
          },
        ],
        name: "De Jeugd Van Tegenwoordig",
        popularity: 54,
        type: "artist",
        uri: "spotify:artist:1u7uShzlA1tXJeox3jMFPq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6Sfc2PHahTkIKAzGM0wudB",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/6Sfc2PHahTkIKAzGM0wudB",
        id: "6Sfc2PHahTkIKAzGM0wudB",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb600cec64ea0a4772806ddde7",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174600cec64ea0a4772806ddde7",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178600cec64ea0a4772806ddde7",
            width: 160,
          },
        ],
        name: "TILAR",
        popularity: 19,
        type: "artist",
        uri: "spotify:artist:6Sfc2PHahTkIKAzGM0wudB",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/78cT0dM5Ivm722EP2sgfDh",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["comedy rock"],
        href: "https://api.spotify.com/v1/artists/78cT0dM5Ivm722EP2sgfDh",
        id: "78cT0dM5Ivm722EP2sgfDh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebcdad06f2e5686426adc6b717",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174cdad06f2e5686426adc6b717",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178cdad06f2e5686426adc6b717",
            width: 160,
          },
        ],
        name: "Bill Wurtz",
        popularity: 38,
        type: "artist",
        uri: "spotify:artist:78cT0dM5Ivm722EP2sgfDh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6DyhWc1O1h5v5olTLhKv3M",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["jazz rap"],
        href: "https://api.spotify.com/v1/artists/6DyhWc1O1h5v5olTLhKv3M",
        id: "6DyhWc1O1h5v5olTLhKv3M",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebb3eb22ca4af1ad069ee56f38",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174b3eb22ca4af1ad069ee56f38",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178b3eb22ca4af1ad069ee56f38",
            width: 160,
          },
        ],
        name: "EllMatic",
        popularity: 30,
        type: "artist",
        uri: "spotify:artist:6DyhWc1O1h5v5olTLhKv3M",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1HOeqtP7tHkKNJNLzQ2tnr",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "british indie rock",
          "experimental pop",
          "modern rock",
          "new rave",
        ],
        href: "https://api.spotify.com/v1/artists/1HOeqtP7tHkKNJNLzQ2tnr",
        id: "1HOeqtP7tHkKNJNLzQ2tnr",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb4ae4999521cdc4a1f35c437e",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051744ae4999521cdc4a1f35c437e",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1784ae4999521cdc4a1f35c437e",
            width: 160,
          },
        ],
        name: "Everything Everything",
        popularity: 49,
        type: "artist",
        uri: "spotify:artist:1HOeqtP7tHkKNJNLzQ2tnr",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4YygB8sfxuIcj2p0G9kpQ5",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["progressive jazz fusion"],
        href: "https://api.spotify.com/v1/artists/4YygB8sfxuIcj2p0G9kpQ5",
        id: "4YygB8sfxuIcj2p0G9kpQ5",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb730fd84f6b5ce1e8dad322b3",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174730fd84f6b5ce1e8dad322b3",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178730fd84f6b5ce1e8dad322b3",
            width: 160,
          },
        ],
        name: "Thank You Scientist",
        popularity: 40,
        type: "artist",
        uri: "spotify:artist:4YygB8sfxuIcj2p0G9kpQ5",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4M0DtVyxxAVjPTFQYPpX1y",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["jazz rap", "uk alternative hip hop"],
        href: "https://api.spotify.com/v1/artists/4M0DtVyxxAVjPTFQYPpX1y",
        id: "4M0DtVyxxAVjPTFQYPpX1y",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebcc3d0b1cef89da88b4e0a93c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174cc3d0b1cef89da88b4e0a93c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178cc3d0b1cef89da88b4e0a93c",
            width: 160,
          },
        ],
        name: "2nd Exit",
        popularity: 41,
        type: "artist",
        uri: "spotify:artist:4M0DtVyxxAVjPTFQYPpX1y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dance pop", "pop"],
        href: "https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5",
        id: "5cj0lLjcoR7YOSnhnX0Po5",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb7f6d6cac38d494e87692af99",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051747f6d6cac38d494e87692af99",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1787f6d6cac38d494e87692af99",
            width: 160,
          },
        ],
        name: "Doja Cat",
        popularity: 89,
        type: "artist",
        uri: "spotify:artist:5cj0lLjcoR7YOSnhnX0Po5",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6LkMGN0t3HDNL8hIvma70r",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["finnish pop"],
        href: "https://api.spotify.com/v1/artists/6LkMGN0t3HDNL8hIvma70r",
        id: "6LkMGN0t3HDNL8hIvma70r",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb2b9e1d7fb3af9f51efddfbeb",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051742b9e1d7fb3af9f51efddfbeb",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1782b9e1d7fb3af9f51efddfbeb",
            width: 160,
          },
        ],
        name: "Käärijä",
        popularity: 60,
        type: "artist",
        uri: "spotify:artist:6LkMGN0t3HDNL8hIvma70r",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6zFYqv1mOsgBRQbae3JJ9e",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "album rock",
          "classic rock",
          "heartland rock",
          "mellow gold",
          "piano rock",
          "rock",
          "singer-songwriter",
          "soft rock",
        ],
        href: "https://api.spotify.com/v1/artists/6zFYqv1mOsgBRQbae3JJ9e",
        id: "6zFYqv1mOsgBRQbae3JJ9e",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb712c7643e8aa18a4aca6c811",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174712c7643e8aa18a4aca6c811",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178712c7643e8aa18a4aca6c811",
            width: 160,
          },
        ],
        name: "Billy Joel",
        popularity: 75,
        type: "artist",
        uri: "spotify:artist:6zFYqv1mOsgBRQbae3JJ9e",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0xGtOrmB2hnrNRLG3vhpSo",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["classic city pop"],
        href: "https://api.spotify.com/v1/artists/0xGtOrmB2hnrNRLG3vhpSo",
        id: "0xGtOrmB2hnrNRLG3vhpSo",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273cfd93d36fe2365f9436587d1",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02cfd93d36fe2365f9436587d1",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851cfd93d36fe2365f9436587d1",
            width: 64,
          },
        ],
        name: "Anri",
        popularity: 56,
        type: "artist",
        uri: "spotify:artist:0xGtOrmB2hnrNRLG3vhpSo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3yEnArbNHyTCwMRvD9SBy4",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "alternative rock",
          "australian psych",
          "garage rock",
          "modern blues rock",
          "modern rock",
          "rock",
        ],
        href: "https://api.spotify.com/v1/artists/3yEnArbNHyTCwMRvD9SBy4",
        id: "3yEnArbNHyTCwMRvD9SBy4",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebcd2f1d977a146da9a24d9de5",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174cd2f1d977a146da9a24d9de5",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178cd2f1d977a146da9a24d9de5",
            width: 160,
          },
        ],
        name: "Wolfmother",
        popularity: 58,
        type: "artist",
        uri: "spotify:artist:3yEnArbNHyTCwMRvD9SBy4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4pejUc4iciQfgdX6OKulQn",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "alternative metal",
          "alternative rock",
          "grunge",
          "modern rock",
          "nu metal",
          "palm desert scene",
          "rock",
          "stoner metal",
          "stoner rock",
        ],
        href: "https://api.spotify.com/v1/artists/4pejUc4iciQfgdX6OKulQn",
        id: "4pejUc4iciQfgdX6OKulQn",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb909b2c4b7c768ee03445cd10",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174909b2c4b7c768ee03445cd10",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178909b2c4b7c768ee03445cd10",
            width: 160,
          },
        ],
        name: "Queens of the Stone Age",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:4pejUc4iciQfgdX6OKulQn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3lLHpTOJ11tWiUNGYN14gt",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["indie soul", "irish hip hop"],
        href: "https://api.spotify.com/v1/artists/3lLHpTOJ11tWiUNGYN14gt",
        id: "3lLHpTOJ11tWiUNGYN14gt",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb1b7c5e24cde6e6420d5360b4",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051741b7c5e24cde6e6420d5360b4",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1781b7c5e24cde6e6420d5360b4",
            width: 160,
          },
        ],
        name: "Rejjie Snow",
        popularity: 57,
        type: "artist",
        uri: "spotify:artist:3lLHpTOJ11tWiUNGYN14gt",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "alternative rock",
          "dance rock",
          "modern rock",
          "permanent wave",
          "rock",
        ],
        href: "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb207b21f3ed0ee96adce3166a",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174207b21f3ed0ee96adce3166a",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178207b21f3ed0ee96adce3166a",
            width: 160,
          },
        ],
        name: "The Killers",
        popularity: 76,
        type: "artist",
        uri: "spotify:artist:0C0XlULifJtAgn6ZNCW2eu",
      },
    ],
    total: 50,
    limit: 50,
    offset: 0,
    href: "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0",
    next: null,
    previous: null,
  };

  return artists;
}
export async function getTop50Artists_ShortTerm() {
  const artists = {
    items: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "garage rock",
          "modern rock",
          "permanent wave",
          "rock",
          "sheffield indie",
        ],
        href: "https://api.spotify.com/v1/artists/7Ln80lUS6He07XvHI8qqHH",
        id: "7Ln80lUS6He07XvHI8qqHH",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051747da39dea0a72f581535fb11f",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1787da39dea0a72f581535fb11f",
            width: 160,
          },
        ],
        name: "Arctic Monkeys",
        popularity: 85,
        type: "artist",
        uri: "spotify:artist:7Ln80lUS6He07XvHI8qqHH",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7kAZYW5e5hQHYGQ0XHYhns",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["indie garage rock", "miami indie"],
        href: "https://api.spotify.com/v1/artists/7kAZYW5e5hQHYGQ0XHYhns",
        id: "7kAZYW5e5hQHYGQ0XHYhns",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc92228b7c4d48684820d79b4",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c92228b7c4d48684820d79b4",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c92228b7c4d48684820d79b4",
            width: 160,
          },
        ],
        name: "Mustard Service",
        popularity: 47,
        type: "artist",
        uri: "spotify:artist:7kAZYW5e5hQHYGQ0XHYhns",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["pixel"],
        href: "https://api.spotify.com/v1/artists/4uFZsG1vXrPcvnZ4iSQyrx",
        id: "4uFZsG1vXrPcvnZ4iSQyrx",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba9b8234e3071836212561d19",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a9b8234e3071836212561d19",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a9b8234e3071836212561d19",
            width: 160,
          },
        ],
        name: "C418",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:4uFZsG1vXrPcvnZ4iSQyrx",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4rZJKub3qA5t1yYcT3qmm4",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dutch indie", "dutch indie rock", "dutch rock"],
        href: "https://api.spotify.com/v1/artists/4rZJKub3qA5t1yYcT3qmm4",
        id: "4rZJKub3qA5t1yYcT3qmm4",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebdd0893fa3bb5014e5e3f6d16",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174dd0893fa3bb5014e5e3f6d16",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178dd0893fa3bb5014e5e3f6d16",
            width: 160,
          },
        ],
        name: "De Staat",
        popularity: 40,
        type: "artist",
        uri: "spotify:artist:4rZJKub3qA5t1yYcT3qmm4",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4oDjh8wNW5vDHyFRrDYC4k",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["indie soul", "london rap"],
        href: "https://api.spotify.com/v1/artists/4oDjh8wNW5vDHyFRrDYC4k",
        id: "4oDjh8wNW5vDHyFRrDYC4k",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebad385f12e4046922f7441fa7",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ad385f12e4046922f7441fa7",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ad385f12e4046922f7441fa7",
            width: 160,
          },
        ],
        name: "Loyle Carner",
        popularity: 64,
        type: "artist",
        uri: "spotify:artist:4oDjh8wNW5vDHyFRrDYC4k",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["hip hop", "pittsburgh rap", "pop rap", "rap"],
        href: "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
        id: "4LLpKhyESsyAXpc4laK94U",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174ed3b89aa602145fde71a163a",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178ed3b89aa602145fde71a163a",
            width: 160,
          },
        ],
        name: "Mac Miller",
        popularity: 82,
        type: "artist",
        uri: "spotify:artist:4LLpKhyESsyAXpc4laK94U",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3GBPw9NK25X1Wt2OUvOwY3",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["neo mellow"],
        href: "https://api.spotify.com/v1/artists/3GBPw9NK25X1Wt2OUvOwY3",
        id: "3GBPw9NK25X1Wt2OUvOwY3",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb9555a0b3231117c8cde1fca7",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051749555a0b3231117c8cde1fca7",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1789555a0b3231117c8cde1fca7",
            width: 160,
          },
        ],
        name: "Jack Johnson",
        popularity: 74,
        type: "artist",
        uri: "spotify:artist:3GBPw9NK25X1Wt2OUvOwY3",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6fC2AcsQtd9h4BWELbbire",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["pov: indie", "vancouver indie"],
        href: "https://api.spotify.com/v1/artists/6fC2AcsQtd9h4BWELbbire",
        id: "6fC2AcsQtd9h4BWELbbire",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb66fe5cb49c14d5cadb50ad50",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517466fe5cb49c14d5cadb50ad50",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17866fe5cb49c14d5cadb50ad50",
            width: 160,
          },
        ],
        name: "Peach Pit",
        popularity: 61,
        type: "artist",
        uri: "spotify:artist:6fC2AcsQtd9h4BWELbbire",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2Ex4vjQ6mSh5woTlDWto6d",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [],
        href: "https://api.spotify.com/v1/artists/2Ex4vjQ6mSh5woTlDWto6d",
        id: "2Ex4vjQ6mSh5woTlDWto6d",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb67de313d580458daa8cae786",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517467de313d580458daa8cae786",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17867de313d580458daa8cae786",
            width: 160,
          },
        ],
        name: "Masayoshi Takanaka",
        popularity: 53,
        type: "artist",
        uri: "spotify:artist:2Ex4vjQ6mSh5woTlDWto6d",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4M0DtVyxxAVjPTFQYPpX1y",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["jazz rap", "uk alternative hip hop"],
        href: "https://api.spotify.com/v1/artists/4M0DtVyxxAVjPTFQYPpX1y",
        id: "4M0DtVyxxAVjPTFQYPpX1y",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebcc3d0b1cef89da88b4e0a93c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174cc3d0b1cef89da88b4e0a93c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178cc3d0b1cef89da88b4e0a93c",
            width: 160,
          },
        ],
        name: "2nd Exit",
        popularity: 41,
        type: "artist",
        uri: "spotify:artist:4M0DtVyxxAVjPTFQYPpX1y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5cj0lLjcoR7YOSnhnX0Po5",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dance pop", "pop"],
        href: "https://api.spotify.com/v1/artists/5cj0lLjcoR7YOSnhnX0Po5",
        id: "5cj0lLjcoR7YOSnhnX0Po5",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb7f6d6cac38d494e87692af99",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051747f6d6cac38d494e87692af99",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1787f6d6cac38d494e87692af99",
            width: 160,
          },
        ],
        name: "Doja Cat",
        popularity: 89,
        type: "artist",
        uri: "spotify:artist:5cj0lLjcoR7YOSnhnX0Po5",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6DyhWc1O1h5v5olTLhKv3M",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["jazz rap"],
        href: "https://api.spotify.com/v1/artists/6DyhWc1O1h5v5olTLhKv3M",
        id: "6DyhWc1O1h5v5olTLhKv3M",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebb3eb22ca4af1ad069ee56f38",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174b3eb22ca4af1ad069ee56f38",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178b3eb22ca4af1ad069ee56f38",
            width: 160,
          },
        ],
        name: "EllMatic",
        popularity: 30,
        type: "artist",
        uri: "spotify:artist:6DyhWc1O1h5v5olTLhKv3M",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4V7Ate3UISn8cy06xnAprh",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["classic japanese jazz"],
        href: "https://api.spotify.com/v1/artists/4V7Ate3UISn8cy06xnAprh",
        id: "4V7Ate3UISn8cy06xnAprh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273b752bbaa0dd7578b736f7cc1",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02b752bbaa0dd7578b736f7cc1",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851b752bbaa0dd7578b736f7cc1",
            width: 64,
          },
        ],
        name: "Ryo Fukui",
        popularity: 45,
        type: "artist",
        uri: "spotify:artist:4V7Ate3UISn8cy06xnAprh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["australian psych", "modern rock", "neo-psychedelic", "rock"],
        href: "https://api.spotify.com/v1/artists/5INjqkS1o8h1imAzPqGZBb",
        id: "5INjqkS1o8h1imAzPqGZBb",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb90357ef28b3a012a1d1b2fa2",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517490357ef28b3a012a1d1b2fa2",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17890357ef28b3a012a1d1b2fa2",
            width: 160,
          },
        ],
        name: "Tame Impala",
        popularity: 79,
        type: "artist",
        uri: "spotify:artist:5INjqkS1o8h1imAzPqGZBb",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["alternative rock", "modern rock", "permanent wave", "rock"],
        href: "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
        id: "12Chz98pHFMPJEknJQMWvI",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051740accbbe13e1aa147dd27671c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1780accbbe13e1aa147dd27671c",
            width: 160,
          },
        ],
        name: "Muse",
        popularity: 74,
        type: "artist",
        uri: "spotify:artist:12Chz98pHFMPJEknJQMWvI",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2vnB6tuQMaQpORiRdvXF9H",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["bubblegrunge", "chicago indie", "indie pop", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/2vnB6tuQMaQpORiRdvXF9H",
        id: "2vnB6tuQMaQpORiRdvXF9H",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebbf42b607fb398365296230b0",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174bf42b607fb398365296230b0",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178bf42b607fb398365296230b0",
            width: 160,
          },
        ],
        name: "Beach Bunny",
        popularity: 67,
        type: "artist",
        uri: "spotify:artist:2vnB6tuQMaQpORiRdvXF9H",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4UAW69682T7N0wrABUhqx0",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["hypnagogic pop", "oc indie"],
        href: "https://api.spotify.com/v1/artists/4UAW69682T7N0wrABUhqx0",
        id: "4UAW69682T7N0wrABUhqx0",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebc0fcdff62c745083539008a5",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174c0fcdff62c745083539008a5",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178c0fcdff62c745083539008a5",
            width: 160,
          },
        ],
        name: "Ginger Root",
        popularity: 51,
        type: "artist",
        uri: "spotify:artist:4UAW69682T7N0wrABUhqx0",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6xt9sJmmyYwWkJv8A6ssiU",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["instrumental funk"],
        href: "https://api.spotify.com/v1/artists/6xt9sJmmyYwWkJv8A6ssiU",
        id: "6xt9sJmmyYwWkJv8A6ssiU",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb92310aa6572e976c622af175",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517492310aa6572e976c622af175",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17892310aa6572e976c622af175",
            width: 160,
          },
        ],
        name: "Cory Wong",
        popularity: 54,
        type: "artist",
        uri: "spotify:artist:6xt9sJmmyYwWkJv8A6ssiU",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/78cT0dM5Ivm722EP2sgfDh",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["comedy rock"],
        href: "https://api.spotify.com/v1/artists/78cT0dM5Ivm722EP2sgfDh",
        id: "78cT0dM5Ivm722EP2sgfDh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebcdad06f2e5686426adc6b717",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174cdad06f2e5686426adc6b717",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178cdad06f2e5686426adc6b717",
            width: 160,
          },
        ],
        name: "Bill Wurtz",
        popularity: 38,
        type: "artist",
        uri: "spotify:artist:78cT0dM5Ivm722EP2sgfDh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "alternative rock",
          "dance rock",
          "modern rock",
          "permanent wave",
          "rock",
        ],
        href: "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
        id: "0C0XlULifJtAgn6ZNCW2eu",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb207b21f3ed0ee96adce3166a",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174207b21f3ed0ee96adce3166a",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178207b21f3ed0ee96adce3166a",
            width: 160,
          },
        ],
        name: "The Killers",
        popularity: 76,
        type: "artist",
        uri: "spotify:artist:0C0XlULifJtAgn6ZNCW2eu",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0I6yADrmeyvw66g7yjkqIF",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["otacore", "pixel", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/0I6yADrmeyvw66g7yjkqIF",
        id: "0I6yADrmeyvw66g7yjkqIF",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb686e3992aef97266d01b6c6f",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174686e3992aef97266d01b6c6f",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178686e3992aef97266d01b6c6f",
            width: 160,
          },
        ],
        name: "The Living Tombstone",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:0I6yADrmeyvw66g7yjkqIF",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2Waw2sSbqvAwK8NwACNjVo",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["comic", "pov: indie"],
        href: "https://api.spotify.com/v1/artists/2Waw2sSbqvAwK8NwACNjVo",
        id: "2Waw2sSbqvAwK8NwACNjVo",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb30d9a4acdf8cd3e8c0ad39ab",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517430d9a4acdf8cd3e8c0ad39ab",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17830d9a4acdf8cd3e8c0ad39ab",
            width: 160,
          },
        ],
        name: "Bo Burnham",
        popularity: 67,
        type: "artist",
        uri: "spotify:artist:2Waw2sSbqvAwK8NwACNjVo",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3lLHpTOJ11tWiUNGYN14gt",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["indie soul", "irish hip hop"],
        href: "https://api.spotify.com/v1/artists/3lLHpTOJ11tWiUNGYN14gt",
        id: "3lLHpTOJ11tWiUNGYN14gt",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb1b7c5e24cde6e6420d5360b4",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051741b7c5e24cde6e6420d5360b4",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1781b7c5e24cde6e6420d5360b4",
            width: 160,
          },
        ],
        name: "Rejjie Snow",
        popularity: 57,
        type: "artist",
        uri: "spotify:artist:3lLHpTOJ11tWiUNGYN14gt",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["electro", "filter house", "rock"],
        href: "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
        id: "4tZwfgrHOc3mvqYlEYSvVi",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eba7bfd7835b5c1eee0c95fa6e",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174a7bfd7835b5c1eee0c95fa6e",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178a7bfd7835b5c1eee0c95fa6e",
            width: 160,
          },
        ],
        name: "Daft Punk",
        popularity: 79,
        type: "artist",
        uri: "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/77SW9BnxLY8rJ0RciFqkHh",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["modern alternative rock", "modern rock", "pop"],
        href: "https://api.spotify.com/v1/artists/77SW9BnxLY8rJ0RciFqkHh",
        id: "77SW9BnxLY8rJ0RciFqkHh",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5ebdf0b5ac84376a0a4b2166816",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174df0b5ac84376a0a4b2166816",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178df0b5ac84376a0a4b2166816",
            width: 160,
          },
        ],
        name: "The Neighbourhood",
        popularity: 82,
        type: "artist",
        uri: "spotify:artist:77SW9BnxLY8rJ0RciFqkHh",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/7FhRUp59cBzPaxobsRY1Nc",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["la pop"],
        href: "https://api.spotify.com/v1/artists/7FhRUp59cBzPaxobsRY1Nc",
        id: "7FhRUp59cBzPaxobsRY1Nc",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb34074c27de56175d724b9f46",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517434074c27de56175d724b9f46",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17834074c27de56175d724b9f46",
            width: 160,
          },
        ],
        name: "Bay Ledges",
        popularity: 55,
        type: "artist",
        uri: "spotify:artist:7FhRUp59cBzPaxobsRY1Nc",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/1u7uShzlA1tXJeox3jMFPq",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["dutch hip hop", "dutch pop", "dutch rock"],
        href: "https://api.spotify.com/v1/artists/1u7uShzlA1tXJeox3jMFPq",
        id: "1u7uShzlA1tXJeox3jMFPq",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb0eacdb361f079bb587c0893f",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051740eacdb361f079bb587c0893f",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1780eacdb361f079bb587c0893f",
            width: 160,
          },
        ],
        name: "De Jeugd Van Tegenwoordig",
        popularity: 54,
        type: "artist",
        uri: "spotify:artist:1u7uShzlA1tXJeox3jMFPq",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2FdiOm1d5IVBdLlobhzlTF",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["classic city pop"],
        href: "https://api.spotify.com/v1/artists/2FdiOm1d5IVBdLlobhzlTF",
        id: "2FdiOm1d5IVBdLlobhzlTF",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b27399c0ecaf5aca482a51acf628",
            width: 640,
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e0299c0ecaf5aca482a51acf628",
            width: 300,
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d0000485199c0ecaf5aca482a51acf628",
            width: 64,
          },
        ],
        name: "Kingo Hamada",
        popularity: 44,
        type: "artist",
        uri: "spotify:artist:2FdiOm1d5IVBdLlobhzlTF",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4pejUc4iciQfgdX6OKulQn",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: [
          "alternative metal",
          "alternative rock",
          "grunge",
          "modern rock",
          "nu metal",
          "palm desert scene",
          "rock",
          "stoner metal",
          "stoner rock",
        ],
        href: "https://api.spotify.com/v1/artists/4pejUc4iciQfgdX6OKulQn",
        id: "4pejUc4iciQfgdX6OKulQn",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb909b2c4b7c768ee03445cd10",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174909b2c4b7c768ee03445cd10",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178909b2c4b7c768ee03445cd10",
            width: 160,
          },
        ],
        name: "Queens of the Stone Age",
        popularity: 70,
        type: "artist",
        uri: "spotify:artist:4pejUc4iciQfgdX6OKulQn",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/5Rl15oVamLq7FbSb0NNBNy",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["boy band", "pop"],
        href: "https://api.spotify.com/v1/artists/5Rl15oVamLq7FbSb0NNBNy",
        id: "5Rl15oVamLq7FbSb0NNBNy",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb5048d9616b459ef90f04b6d8",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051745048d9616b459ef90f04b6d8",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1785048d9616b459ef90f04b6d8",
            width: 160,
          },
        ],
        name: "5 Seconds of Summer",
        popularity: 76,
        type: "artist",
        uri: "spotify:artist:5Rl15oVamLq7FbSb0NNBNy",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0sLb0ouettR8lDLnEgCSVK",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["lo-fi jazzhop", "lo-fi study"],
        href: "https://api.spotify.com/v1/artists/0sLb0ouettR8lDLnEgCSVK",
        id: "0sLb0ouettR8lDLnEgCSVK",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb477760692350c18790091669",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174477760692350c18790091669",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178477760692350c18790091669",
            width: 160,
          },
        ],
        name: "Living Room",
        popularity: 57,
        type: "artist",
        uri: "spotify:artist:0sLb0ouettR8lDLnEgCSVK",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3iGthn6RykA9JUHnilAIr0",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["lo-fi sleep", "lo-fi study"],
        href: "https://api.spotify.com/v1/artists/3iGthn6RykA9JUHnilAIr0",
        id: "3iGthn6RykA9JUHnilAIr0",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb97edf621add5caa8a9e632a4",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517497edf621add5caa8a9e632a4",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17897edf621add5caa8a9e632a4",
            width: 160,
          },
        ],
        name: "Krynoze",
        popularity: 56,
        type: "artist",
        uri: "spotify:artist:3iGthn6RykA9JUHnilAIr0",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/6ysKfYgiKUTMCuq2fSTLK3",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["lo-fi study"],
        href: "https://api.spotify.com/v1/artists/6ysKfYgiKUTMCuq2fSTLK3",
        id: "6ysKfYgiKUTMCuq2fSTLK3",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb266e76bb9afa276d08aece6c",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab67616100005174266e76bb9afa276d08aece6c",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f178266e76bb9afa276d08aece6c",
            width: 160,
          },
        ],
        name: "xander.",
        popularity: 56,
        type: "artist",
        uri: "spotify:artist:6ysKfYgiKUTMCuq2fSTLK3",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/77aATgrzmuoRjmqxPcEIHU",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["lo-fi beats", "lo-fi study"],
        href: "https://api.spotify.com/v1/artists/77aATgrzmuoRjmqxPcEIHU",
        id: "77aATgrzmuoRjmqxPcEIHU",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb8131e264fcaf76b6a24a07e2",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051748131e264fcaf76b6a24a07e2",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1788131e264fcaf76b6a24a07e2",
            width: 160,
          },
        ],
        name: "brillion.",
        popularity: 55,
        type: "artist",
        uri: "spotify:artist:77aATgrzmuoRjmqxPcEIHU",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/0wcen0V8FgQu6xYupnZMbB",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["lo-fi beats", "lo-fi study"],
        href: "https://api.spotify.com/v1/artists/0wcen0V8FgQu6xYupnZMbB",
        id: "0wcen0V8FgQu6xYupnZMbB",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb3ed26cd944be61cf5628f157",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab676161000051743ed26cd944be61cf5628f157",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f1783ed26cd944be61cf5628f157",
            width: 160,
          },
        ],
        name: "softy",
        popularity: 61,
        type: "artist",
        uri: "spotify:artist:0wcen0V8FgQu6xYupnZMbB",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/4CSOdm2yCuB71TxCfV105e",
        },
        followers: {
          href: null,
          total: 0,
        },
        genres: ["focus beats", "lo-fi study"],
        href: "https://api.spotify.com/v1/artists/4CSOdm2yCuB71TxCfV105e",
        id: "4CSOdm2yCuB71TxCfV105e",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab6761610000e5eb45206b700d3136668a5ebfdc",
            width: 640,
          },
          {
            height: 320,
            url: "https://i.scdn.co/image/ab6761610000517445206b700d3136668a5ebfdc",
            width: 320,
          },
          {
            height: 160,
            url: "https://i.scdn.co/image/ab6761610000f17845206b700d3136668a5ebfdc",
            width: 160,
          },
        ],
        name: "Kinissue",
        popularity: 50,
        type: "artist",
        uri: "spotify:artist:4CSOdm2yCuB71TxCfV105e",
      },
    ],
    total: 36,
    limit: 50,
    offset: 0,
    href: "https://api.spotify.com/v1/me/top/artists?limit=50&offset=0&time_range=short_term",
    next: null,
    previous: null,
  };

  return artists;
}
