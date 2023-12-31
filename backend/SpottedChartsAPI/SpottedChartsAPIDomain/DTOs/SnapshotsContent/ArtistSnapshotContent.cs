﻿using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPIDomain.Models.SnapshotsContent;

public class ArtistSnapshotsContent : ISnapshotContent
{
    public int Rank { get; set; }
    public string Artist { get; set; }
    public string CoverArtURL { get; set; }
    public string SpotifyUrl { get; set; }

    public ArtistSnapshotsContent(int rank, string artist, string coverArtURL, string spotifyUrl)
    {
        Rank = rank;
        Artist = artist;
        CoverArtURL = coverArtURL;
        SpotifyUrl = spotifyUrl;
    }
}

