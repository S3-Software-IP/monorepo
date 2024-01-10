const artistMock = jest.genMockFromModule("axios");

artistMock.get = jest.fn(() =>
  Promise.resolve({
    data: [
      {
        id: "9314b361-8421-42d6-9b49-a00b45396707",
        userId: "9d61f7d2-6831-45d6-9fe0-e02bc80c2047",
        dateTaken: "2024-01-09T16:04:43",
        artists: [
          {
            rank: 1,
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f",
            spotifyUrl:
              "https://open.spotify.com/artist/7Ln80lUS6He07XvHI8qqHH",
          },
          {
            rank: 2,
            artist: "De Staat",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebdd0893fa3bb5014e5e3f6d16",
            spotifyUrl:
              "https://open.spotify.com/artist/4rZJKub3qA5t1yYcT3qmm4",
          },
          {
            rank: 3,
            artist: "Mustard Service",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebc92228b7c4d48684820d79b4",
            spotifyUrl:
              "https://open.spotify.com/artist/7kAZYW5e5hQHYGQ0XHYhns",
          },
          {
            rank: 4,
            artist: "Bo Burnham",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb30d9a4acdf8cd3e8c0ad39ab",
            spotifyUrl:
              "https://open.spotify.com/artist/2Waw2sSbqvAwK8NwACNjVo",
          },
          {
            rank: 5,
            artist: "Peach Pit",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb66fe5cb49c14d5cadb50ad50",
            spotifyUrl:
              "https://open.spotify.com/artist/6fC2AcsQtd9h4BWELbbire",
          },
          {
            rank: 6,
            artist: "Gorillaz",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb337d671a32b2f44d4a4e6cf2",
            spotifyUrl:
              "https://open.spotify.com/artist/3AA28KZvwAUcZuOKwyblJQ",
          },
          {
            rank: 7,
            artist: "Daft Punk",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eba7bfd7835b5c1eee0c95fa6e",
            spotifyUrl:
              "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi",
          },
          {
            rank: 8,
            artist: "Muse",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb0accbbe13e1aa147dd27671c",
            spotifyUrl:
              "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI",
          },
          {
            rank: 9,
            artist: "The Reign of Kindo",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb4c0c7787467fbdeee2826d46",
            spotifyUrl:
              "https://open.spotify.com/artist/0JyCM9EwjQZZzQPGTSM1qc",
          },
          {
            rank: 10,
            artist: "Loyle Carner",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebad385f12e4046922f7441fa7",
            spotifyUrl:
              "https://open.spotify.com/artist/4oDjh8wNW5vDHyFRrDYC4k",
          },
          {
            rank: 11,
            artist: "Lovejoy",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb22689a583f664fe0306f2644",
            spotifyUrl:
              "https://open.spotify.com/artist/33tFkBLsl6f8TjKkV0uF0C",
          },
          {
            rank: 12,
            artist: "Tame Impala",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb90357ef28b3a012a1d1b2fa2",
            spotifyUrl:
              "https://open.spotify.com/artist/5INjqkS1o8h1imAzPqGZBb",
          },
          {
            rank: 13,
            artist: "Strawberry Girls",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb07e508b25e428370ea6104af",
            spotifyUrl:
              "https://open.spotify.com/artist/4CyxMgnF71FyOWADVWxJRE",
          },
          {
            rank: 14,
            artist: "Bay Ledges",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebf0aba48e2d0c1a6bd0ca6540",
            spotifyUrl:
              "https://open.spotify.com/artist/7FhRUp59cBzPaxobsRY1Nc",
          },
          {
            rank: 15,
            artist: "Masayoshi Takanaka",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb67de313d580458daa8cae786",
            spotifyUrl:
              "https://open.spotify.com/artist/2Ex4vjQ6mSh5woTlDWto6d",
          },
          {
            rank: 16,
            artist: "Mac Miller",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a",
            spotifyUrl:
              "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U",
          },
          {
            rank: 17,
            artist: "Ryo Fukui",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273b752bbaa0dd7578b736f7cc1",
            spotifyUrl:
              "https://open.spotify.com/artist/4V7Ate3UISn8cy06xnAprh",
          },
          {
            rank: 18,
            artist: "The Living Tombstone",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb686e3992aef97266d01b6c6f",
            spotifyUrl:
              "https://open.spotify.com/artist/0I6yADrmeyvw66g7yjkqIF",
          },
          {
            rank: 19,
            artist: "Wilbur Soot",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2737c25600d7382a024b6e8ee02",
            spotifyUrl:
              "https://open.spotify.com/artist/2XzXLjXRSeFtsic4ieyLJy",
          },
          {
            rank: 20,
            artist: "glass beach",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb8af97c6754e862092c33f4b2",
            spotifyUrl:
              "https://open.spotify.com/artist/4gHs8pWsgZpndQZKs6QVRH",
          },
          {
            rank: 21,
            artist: "Vulfpeck",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb3f8c36a57018e5221c8c458c",
            spotifyUrl:
              "https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6",
          },
          {
            rank: 22,
            artist: "Polyphia",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebd0d5560f6b2ebe39a6d20704",
            spotifyUrl:
              "https://open.spotify.com/artist/4vGrte8FDu062Ntj0RsPiZ",
          },
          {
            rank: 23,
            artist: "Cage The Elephant",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb7d994f7e137c10249de19455",
            spotifyUrl:
              "https://open.spotify.com/artist/26T3LtbuGT1Fu9m0eRq5X3",
          },
          {
            rank: 24,
            artist: "Dua Lipa",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebb6fff4b133bd150337490935",
            spotifyUrl:
              "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we",
          },
          {
            rank: 25,
            artist: "Hiatus Kaiyote",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebf989f36b43cba6dc03a5dd15",
            spotifyUrl:
              "https://open.spotify.com/artist/43JlwunhXm1oqdKyOa2Z9Y",
          },
          {
            rank: 26,
            artist: "AnnenMayKantereit",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebbcf79c131f4ddb3635dd60bb",
            spotifyUrl:
              "https://open.spotify.com/artist/23xqmJEN3oVxwzqtNIyR5m",
          },
          {
            rank: 27,
            artist: "CASIOPEA",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273648478cb25e3e302454e40e1",
            spotifyUrl:
              "https://open.spotify.com/artist/0lRXEutklZUeNdWIJA1NI0",
          },
          {
            rank: 28,
            artist: "Queens of the Stone Age",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb909b2c4b7c768ee03445cd10",
            spotifyUrl:
              "https://open.spotify.com/artist/4pejUc4iciQfgdX6OKulQn",
          },
          {
            rank: 29,
            artist: "alt-J",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb3fb5214e667e278a20878a6b",
            spotifyUrl:
              "https://open.spotify.com/artist/3XHO7cRUPCLOr6jwp8vsx5",
          },
          {
            rank: 30,
            artist: "Mac DeMarco",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb3cef7752073cbbd2cc04c6f0",
            spotifyUrl:
              "https://open.spotify.com/artist/3Sz7ZnJQBIHsXLUSo0OQtM",
          },
          {
            rank: 31,
            artist: "Beach Bunny",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebbf42b607fb398365296230b0",
            spotifyUrl:
              "https://open.spotify.com/artist/2vnB6tuQMaQpORiRdvXF9H",
          },
          {
            rank: 32,
            artist: "Two Door Cinema Club",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb86faeb97a905a571b2c361a0",
            spotifyUrl:
              "https://open.spotify.com/artist/536BYVgOnRky0xjsPT96zl",
          },
          {
            rank: 33,
            artist: "iamjakehill",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebb539c9260c552be52511e15b",
            spotifyUrl:
              "https://open.spotify.com/artist/26JloX1vHxGGrGUVeMItFJ",
          },
          {
            rank: 34,
            artist: "The Kooks",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebd263e0042b36fd357c8c7cdb",
            spotifyUrl:
              "https://open.spotify.com/artist/1GLtl8uqKmnyCWxHmw9tL4",
          },
          {
            rank: 35,
            artist: "C418",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eba9b8234e3071836212561d19",
            spotifyUrl:
              "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
          },
          {
            rank: 36,
            artist: "Cory Wong",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb92310aa6572e976c622af175",
            spotifyUrl:
              "https://open.spotify.com/artist/6xt9sJmmyYwWkJv8A6ssiU",
          },
          {
            rank: 37,
            artist: "The Front Bottoms",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb9ccd0f7c946f23ec27194c0d",
            spotifyUrl:
              "https://open.spotify.com/artist/5ictveRyhWRs8Gt8Dvt1hS",
          },
          {
            rank: 38,
            artist: "Jack Johnson",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb9555a0b3231117c8cde1fca7",
            spotifyUrl:
              "https://open.spotify.com/artist/3GBPw9NK25X1Wt2OUvOwY3",
          },
          {
            rank: 39,
            artist: "Ginger Root",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebc0fcdff62c745083539008a5",
            spotifyUrl:
              "https://open.spotify.com/artist/4UAW69682T7N0wrABUhqx0",
          },
          {
            rank: 40,
            artist: "MandoPony",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2738f689d72765879530b64e096",
            spotifyUrl:
              "https://open.spotify.com/artist/2RgldIVB6hgTzEjSXWNFE2",
          },
          {
            rank: 41,
            artist: "Thank You Scientist",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb730fd84f6b5ce1e8dad322b3",
            spotifyUrl:
              "https://open.spotify.com/artist/4YygB8sfxuIcj2p0G9kpQ5",
          },
          {
            rank: 42,
            artist: "The Fratellis",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebd693efe23dcda7b9595e77ec",
            spotifyUrl:
              "https://open.spotify.com/artist/3M4ThdJR28z9eSMcQHAZ5G",
          },
          {
            rank: 43,
            artist: "De Jeugd Van Tegenwoordig",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb0eacdb361f079bb587c0893f",
            spotifyUrl:
              "https://open.spotify.com/artist/1u7uShzlA1tXJeox3jMFPq",
          },
          {
            rank: 44,
            artist: "Jamiroquai",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb7e6dca959714339b69e9718d",
            spotifyUrl:
              "https://open.spotify.com/artist/6J7biCazzYhU3gM9j1wfid",
          },
          {
            rank: 45,
            artist: "Billy Joel",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb712c7643e8aa18a4aca6c811",
            spotifyUrl:
              "https://open.spotify.com/artist/6zFYqv1mOsgBRQbae3JJ9e",
          },
          {
            rank: 46,
            artist: "Nirvana",
            coverArtURL:
              "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b",
            spotifyUrl:
              "https://open.spotify.com/artist/6olE6TJLqED3rqDCT0FyPh",
          },
          {
            rank: 47,
            artist: "Modern Baseball",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5eb6d114786f72d184dd2b91483",
            spotifyUrl:
              "https://open.spotify.com/artist/1HxXNvsraqrsgfmju1yKk8",
          },
          {
            rank: 48,
            artist: "Royal Blood",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebe8b65188fe197abd30703ae2",
            spotifyUrl:
              "https://open.spotify.com/artist/2S5hlvw4CMtMGswFtfdK15",
          },
          {
            rank: 49,
            artist: "The Wombats",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebb1dfda0b1915ee7f18683482",
            spotifyUrl:
              "https://open.spotify.com/artist/0Ya43ZKWHTKkAbkoJJkwIB",
          },
          {
            rank: 50,
            artist: "Wallows",
            coverArtURL:
              "https://i.scdn.co/image/ab6761610000e5ebdea0fc37a1f39060e74c569b",
            spotifyUrl:
              "https://open.spotify.com/artist/0NIPkIjTV8mB795yEIiPYL",
          },
        ],
        songs: [
          {
            rank: 1,
            song: "Fluorescent Adolescent",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
            spotifyUrl: "https://open.spotify.com/track/2x8evxqUlF0eRabbW2JBJd",
          },
          {
            rank: 2,
            song: "Esperanza",
            artist: "Moriaty",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273db09281824d17f0fb789b7b9",
            spotifyUrl: "https://open.spotify.com/track/0p8NSsesqZJvP2a0WAsQQn",
          },
          {
            rank: 3,
            song: "Them Changes",
            artist: "Thundercat",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27385c5e6c686ced3e43bae2748",
            spotifyUrl: "https://open.spotify.com/track/7CH99b2i1TXS5P8UUyWtnM",
          },
          {
            rank: 4,
            song: "Can't Stop",
            artist: "Red Hot Chili Peppers",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273de1af2785a83cc660155a0c4",
            spotifyUrl: "https://open.spotify.com/track/3ZOEytgrvLwQaqXreDs2Jx",
          },
          {
            rank: 5,
            song: "Seven Days in Sunny June",
            artist: "Jamiroquai",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273951fbcfd4b08a3a19f158ab5",
            spotifyUrl: "https://open.spotify.com/track/2bwxqGKS5GPXfNanAIRe2p",
          },
          {
            rank: 6,
            song: "Sweater Weather",
            artist: "The Neighbourhood",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2738265a736a1eb838ad5a0b921",
            spotifyUrl: "https://open.spotify.com/track/2QjOHCTQ1Jl3zawyYOpxh6",
          },
          {
            rank: 7,
            song: "Cigarette Daydreams",
            artist: "Cage The Elephant",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273415b79227c6cee25f42fbf41",
            spotifyUrl: "https://open.spotify.com/track/6jHvX8ZnHKC1PnrPMJ0Emt",
          },
          {
            rank: 8,
            song: "Damselfly",
            artist: "Loyle Carner",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27398ccb0cb6323cab21090467b",
            spotifyUrl: "https://open.spotify.com/track/32sBVB5HmrwJ6e9g0S2BRL",
          },
          {
            rank: 9,
            song: "Last Nite",
            artist: "The Strokes",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273a388a3f20d1bf2123249cc79",
            spotifyUrl: "https://open.spotify.com/track/7kzKAuUzOITUauHAhoMoxA",
          },
          {
            rank: 10,
            song: "Golden",
            artist: "Cory Wong",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273db23689257e028fe49d1dd0f",
            spotifyUrl: "https://open.spotify.com/track/7wjmwD5nIYWVnHiR3X3PTO",
          },
          {
            rank: 11,
            song: "Blue World",
            artist: "Mac Miller",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27326b7dd89810cc1a40ada642c",
            spotifyUrl: "https://open.spotify.com/track/2hwOoMtWPtTSSn6WHV7Vp5",
          },
          {
            rank: 12,
            song: "When The Sun Goes Down",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
            spotifyUrl: "https://open.spotify.com/track/2zzLRQ78kKfPTx8FJQCdC2",
          },
          {
            rank: 13,
            song: "Alrighty Aphrodite",
            artist: "Peach Pit",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27300b39b4a73d28536690b355c",
            spotifyUrl: "https://open.spotify.com/track/6OiRh4kttAs1YWglvTcYkB",
          },
          {
            rank: 14,
            song: "Why'd You Only Call Me When You're High?",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2734ae1c4c5c45aabe565499163",
            spotifyUrl: "https://open.spotify.com/track/086myS9r57YsLbJpU0TgK9",
          },
          {
            rank: 15,
            song: "Not Dead Yet",
            artist: "Jakey",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273a7fc8aed0ce5a33da92b74f2",
            spotifyUrl: "https://open.spotify.com/track/3E9Wv5hNRwedUjPkkplcx4",
          },
          {
            rank: 16,
            song: "First Kiss",
            artist: "Strawberry Girls",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27313c657d9d7cd462b37d207b5",
            spotifyUrl: "https://open.spotify.com/track/5uhMjQlGtZtox0ArFuMlCB",
          },
          {
            rank: 17,
            song: "Fake It Till You Make It",
            artist: "De Staat",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2734654c2878001bd8d7a7ae2ce",
            spotifyUrl: "https://open.spotify.com/track/2zmp5y7zcABr5ZX03Lrvj5",
          },
          {
            rank: 18,
            song: "How Many Zeros",
            artist: "Unknown Mortal Orchestra",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2738b1ea10ca54961e5e5d94244",
            spotifyUrl: "https://open.spotify.com/track/4XkmtOHgvRbINOOctmsX3M",
          },
          {
            rank: 19,
            song: "Chop Suey!",
            artist: "System Of A Down",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27330d45198d0c9e8841f9a9578",
            spotifyUrl: "https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN",
          },
          {
            rank: 20,
            song: "My Ordinary Life",
            artist: "The Living Tombstone",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273227edcd51b6622cdcbe9f43c",
            spotifyUrl: "https://open.spotify.com/track/6tMdpUXfT70TD6Eh3XfB1p",
          },
          {
            rank: 21,
            song: "Saline Solution",
            artist: "Wilbur Soot",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2730c49b83c7df5d4f240b80678",
            spotifyUrl: "https://open.spotify.com/track/0QUgSlWpeW7VCkLmrc58RU",
          },
          {
            rank: 22,
            song: "就寝御礼",
            artist: "PSYQUI",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273347f824c78331c136e8f8fcc",
            spotifyUrl: "https://open.spotify.com/track/4qalTfgOn1uj22GqC1jQXz",
          },
          {
            rank: 23,
            song: "You Oughta Know",
            artist: "Alanis Morissette",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273d00e49003543a5bb5aa5b873",
            spotifyUrl: "https://open.spotify.com/track/17ZAZ24Eyh5fKqQ06u4R3d",
          },
          {
            rank: 24,
            song: "Cha Cha Cha",
            artist: "Käärijä",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273e9973a2290bd5d88c6aad387",
            spotifyUrl: "https://open.spotify.com/track/5RX8T3EoTuXcybAxe6oPAw",
          },
          {
            rank: 25,
            song: "Pikachu",
            artist: "De Staat",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2734654c2878001bd8d7a7ae2ce",
            spotifyUrl: "https://open.spotify.com/track/6TYc5mEf9VrAHsNlPJV1eu",
          },
          {
            rank: 26,
            song: "505",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
            spotifyUrl: "https://open.spotify.com/track/0BxE4FqsDD1Ot4YuBXwAPp",
          },
          {
            rank: 27,
            song: "Get Fucked",
            artist: "Mustard Service",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2735dc2fdf0f8cefa0f90fdf232",
            spotifyUrl: "https://open.spotify.com/track/35HusLibk4RIHUh7nheP10",
          },
          {
            rank: 28,
            song: "Look Who’s Inside Again",
            artist: "Bo Burnham",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2732853b5ea06ddc676b337c389",
            spotifyUrl: "https://open.spotify.com/track/7d8dqy6GbiUqotcTSs0jXg",
          },
          {
            rank: 29,
            song: "Crying Lightning",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273f65d720a5d70dbb93e96d528",
            spotifyUrl: "https://open.spotify.com/track/6wVWJl64yoTzU27EI8ep20",
          },
          {
            rank: 30,
            song: "Hand In Hand",
            artist: "Beatsteaks",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273e9c5e274686054c29c81e8fb",
            spotifyUrl: "https://open.spotify.com/track/6gX9WJMPGIdszeHjBp2w4w",
          },
          {
            rank: 31,
            song: "The Less I Know The Better",
            artist: "Tame Impala",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
            spotifyUrl: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
          },
          {
            rank: 32,
            song: "Ottolenghi",
            artist: "Loyle Carner",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273b8fc4ee31953f1133106d64a",
            spotifyUrl: "https://open.spotify.com/track/64I9byMYBlS1ARsC3vtpgW",
          },
          {
            rank: 33,
            song: "Feel Good Inc.",
            artist: "Gorillaz",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27319d85a472f328a6ed9b704cf",
            spotifyUrl: "https://open.spotify.com/track/0d28khcov6AiegSCpG5TuT",
          },
          {
            rank: 34,
            song: "Burndt Jamb",
            artist: "Feed Me Jack",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273ce1e5e660bb6788daef4d59e",
            spotifyUrl: "https://open.spotify.com/track/4BWeOdySQ7aEvo6F3RjyJW",
          },
          {
            rank: 35,
            song: "I Bet You Look Good On The Dancefloor",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
            spotifyUrl: "https://open.spotify.com/track/3DQVgcqaP3iSMbaKsd57l5",
          },
          {
            rank: 36,
            song: "Killing In The Name",
            artist: "Rage Against The Machine",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27354ab617bc2d4974ab6ffbece",
            spotifyUrl: "https://open.spotify.com/track/59WN2psjkt1tyaxjspN8fp",
          },
          {
            rank: 37,
            song: "Mr. Blue Sky",
            artist: "Electric Light Orchestra",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2738c4e95986c803791125e8991",
            spotifyUrl: "https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp",
          },
          {
            rank: 38,
            song: "Sports",
            artist: "Beach Bunny",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273cd8c5684a88874b97247fa4a",
            spotifyUrl: "https://open.spotify.com/track/77G0k1La0c5Dw8bAFANcyp",
          },
          {
            rank: 39,
            song: "The Evil Has Landed",
            artist: "Queens of the Stone Age",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27389401ba9a9c231e2add35ae8",
            spotifyUrl: "https://open.spotify.com/track/5xoNx4guLOeGsuFxuqTord",
          },
          {
            rank: 40,
            song: "Cats on Mars",
            artist: "SEATBELTS",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273280bad19713881390e507c5d",
            spotifyUrl: "https://open.spotify.com/track/3uhJllxR54wXP82uVAJbcg",
          },
          {
            rank: 41,
            song: "Brianstorm",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
            spotifyUrl: "https://open.spotify.com/track/7f9I5WdyXm5q1XqnSYgQZb",
          },
          {
            rank: 42,
            song: "Coco",
            artist: "pewdiepie",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273807fe78b50e7fb1a1d22bf66",
            spotifyUrl: "https://open.spotify.com/track/1aZmrST6ppqWbi0bwbwlOj",
          },
          {
            rank: 43,
            song: "Levitating",
            artist: "Dua Lipa",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2734bc66095f8a70bc4e6593f4f",
            spotifyUrl: "https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP",
          },
          {
            rank: 44,
            song: "Old Yellow Bricks",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273b1f8da74f225fa1225cdface",
            spotifyUrl: "https://open.spotify.com/track/5KGbRvZyVyKP2AEJMHErB4",
          },
          {
            rank: 45,
            song: "Miss Alissa",
            artist: "Eagles Of Death Metal",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273e8833f906a4e728c556b1802",
            spotifyUrl: "https://open.spotify.com/track/1YIxmHt4EKS0gMs3L0mxQV",
          },
          {
            rank: 46,
            song: "Fake Tales Of San Francisco",
            artist: "Arctic Monkeys",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b2736b3fa88bdd4af566fbbf2bbf",
            spotifyUrl: "https://open.spotify.com/track/7BuzJmV2h6eBbSDdRaDY7C",
          },
          {
            rank: 47,
            song: "Kopf ab",
            artist: "Bilderbuch",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27372c251f808778c90c4b38d25",
            spotifyUrl: "https://open.spotify.com/track/2waMj6NVeQusWyrwuI3BA8",
          },
          {
            rank: 48,
            song: "Absentee",
            artist: "Jack Campbell",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273d9faaad648fb66405e792a78",
            spotifyUrl: "https://open.spotify.com/track/4TTcBKSLK2lvjJaEBJsVoP",
          },
          {
            rank: 49,
            song: "Losing My Love",
            artist: "Verzache",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b273f113045fd418c5802647d45d",
            spotifyUrl: "https://open.spotify.com/track/1SlM5HXf9DjC6PVy2x4nWQ",
          },
          {
            rank: 50,
            song: "Surfen",
            artist: "Typhoon",
            coverArtURL:
              "https://i.scdn.co/image/ab67616d0000b27366c5790096354289a8d063a7",
            spotifyUrl: "https://open.spotify.com/track/2GEKAhY3g7aRlpidLrqe6W",
          },
        ],
        genres: [
          {
            rank: 1,
            genre: "Modern Rock",
          },
          {
            rank: 2,
            genre: "Rock",
          },
          {
            rank: 3,
            genre: "Pov: Indie",
          },
          {
            rank: 4,
            genre: "Pixel",
          },
          {
            rank: 5,
            genre: "Modern Alternative Rock",
          },
          {
            rank: 6,
            genre: "Garage Rock",
          },
          {
            rank: 7,
            genre: "Permanent Wave",
          },
          {
            rank: 8,
            genre: "Dutch Rock",
          },
          {
            rank: 9,
            genre: "Alternative Rock",
          },
          {
            rank: 10,
            genre: "Piano Rock",
          },
          {
            rank: 11,
            genre: "Indie Soul",
          },
          {
            rank: 12,
            genre: "Classic Japanese Jazz",
          },
          {
            rank: 13,
            genre: "Otacore",
          },
          {
            rank: 14,
            genre: "Instrumental Funk",
          },
          {
            rank: 15,
            genre: "Dance Pop",
          },
          {
            rank: 16,
            genre: "Grunge",
          },
          {
            rank: 17,
            genre: "Indie Rock",
          },
          {
            rank: 18,
            genre: "Indietronica",
          },
          {
            rank: 19,
            genre: "Brighton Indie",
          },
          {
            rank: 20,
            genre: "Emo",
          },
          {
            rank: 21,
            genre: "Sheffield Indie",
          },
          {
            rank: 22,
            genre: "Dutch Indie",
          },
          {
            rank: 23,
            genre: "Dutch Indie Rock",
          },
          {
            rank: 24,
            genre: "Indie Garage Rock",
          },
          {
            rank: 25,
            genre: "Miami Indie",
          },
          {
            rank: 26,
            genre: "Comic",
          },
          {
            rank: 27,
            genre: "Vancouver Indie",
          },
          {
            rank: 28,
            genre: "Alternative Hip Hop",
          },
          {
            rank: 29,
            genre: "Electro",
          },
          {
            rank: 30,
            genre: "Filter House",
          },
          {
            rank: 31,
            genre: "London Rap",
          },
          {
            rank: 32,
            genre: "Australian Psych",
          },
          {
            rank: 33,
            genre: "Neo-Psychedelic",
          },
          {
            rank: 34,
            genre: "Math Rock",
          },
          {
            rank: 35,
            genre: "Progressive Post-Hardcore",
          },
          {
            rank: 36,
            genre: "La Pop",
          },
          {
            rank: 37,
            genre: "Hip Hop",
          },
          {
            rank: 38,
            genre: "Pittsburgh Rap",
          },
          {
            rank: 39,
            genre: "Rap",
          },
          {
            rank: 40,
            genre: "5Th Wave Emo",
          },
          {
            rank: 41,
            genre: "Modern Power Pop",
          },
          {
            rank: 42,
            genre: "Ann Arbor Indie",
          },
          {
            rank: 43,
            genre: "Funk Rock",
          },
          {
            rank: 44,
            genre: "Instrumental Rock",
          },
          {
            rank: 45,
            genre: "Punk Blues",
          },
          {
            rank: 46,
            genre: "Pop",
          },
          {
            rank: 47,
            genre: "Uk Pop",
          },
          {
            rank: 48,
            genre: "Alternative R&B",
          },
          {
            rank: 49,
            genre: "Australian R&B",
          },
          {
            rank: 50,
            genre: "Shiver Pop",
          },
        ],
      },
    ],
  })
);

export default artistMock;
