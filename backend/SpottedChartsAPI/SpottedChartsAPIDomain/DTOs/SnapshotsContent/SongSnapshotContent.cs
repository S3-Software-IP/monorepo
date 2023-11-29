namespace SpottedChartsAPIDomain.Models.SnapshotsContent;

public class SongSnapshotsContent
{
    public int Rank { get; set; }
    public string Song { get; set; }
    public string Artist { get; set; }
    public string CoverArtURL { get; set; }
    public string SpotifyUrl { get; set; }

    public SongSnapshotsContent(int rank, string song, string artist, string coverArtlURL, string spotifyURL)
    {
        Rank = rank;
        Song = song;
        Artist = artist;
        CoverArtURL = coverArtlURL;
        SpotifyUrl = spotifyURL;
    }
}
