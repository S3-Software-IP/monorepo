using SpotifyAPI.Web;
using SpottedChartsAPIDomain.Models.SnapshotsContent;
using System.Globalization;

namespace SpottedChartsAPIDomain.Services;

public class SpotifyService
{
    public async Task<List<SongSnapshotsContent>> GetTopTracks(string accessToken, string refreshToken, int resultLength = 50)
    {
        resultLength = LimitResultsLength(resultLength);
        accessToken = await RefreshAccessToken(accessToken, refreshToken);

        SpotifyClient spotify = new SpotifyClient(accessToken);

        var results = await spotify.Personalization.GetTopTracks(new PersonalizationTopRequest
        {
            Limit = resultLength,
            TimeRangeParam = PersonalizationTopRequest.TimeRange.LongTerm
        });

        List<SongSnapshotsContent> tracks = new List<SongSnapshotsContent>();
        int rank = 1;

        foreach (FullTrack track in results.Items)
        {
            SongSnapshotsContent songSnapshotsContent = new SongSnapshotsContent(
                rank,
                track.Name,
                track.Artists[0].Name,
                track.Album.Images[0].Url,
                track.ExternalUrls["spotify"]
            );

            rank++;
            tracks.Add(songSnapshotsContent);
        }

        return tracks;
    }

    public async Task<List<ArtistSnapshotsContent>> GetTopArtists(string accessToken, string refreshToken, int resultLength = 50)
    {
        resultLength = LimitResultsLength(resultLength);
        accessToken = await RefreshAccessToken(accessToken, refreshToken);

        SpotifyClient spotify = new SpotifyClient(accessToken);

        var results = await spotify.Personalization.GetTopArtists(new PersonalizationTopRequest
        {
            Limit = resultLength,
            TimeRangeParam = PersonalizationTopRequest.TimeRange.LongTerm
        });

        List<ArtistSnapshotsContent> artists = new List<ArtistSnapshotsContent>();
        int rank = 1;

        foreach (FullArtist artist in results.Items)
        {
            ArtistSnapshotsContent songSnapshotsContent = new ArtistSnapshotsContent(
                rank,
                artist.Name,
                artist.Images[0].Url,
                artist.ExternalUrls["spotify"]
            );

            rank++;
            artists.Add(songSnapshotsContent);
        }

        return artists;
    }

    public async Task<List<GenreSnapshotContent>> GetTopGenres(string accessToken, string refreshToken, int resultLength = 50)
    {
        resultLength = LimitResultsLength(resultLength);
        accessToken = await RefreshAccessToken(accessToken, refreshToken);

        SpotifyClient spotify = new SpotifyClient(accessToken);

        var topArtists = await spotify.Personalization.GetTopArtists(new PersonalizationTopRequest
        {
            Limit = resultLength,
            TimeRangeParam = PersonalizationTopRequest.TimeRange.LongTerm
        });

        List<GenreSnapshotContent> genres = GetSortedGenres(topArtists);

        return genres;
    }
    internal List<GenreSnapshotContent> GetSortedGenres(Paging<FullArtist> artists)
    {
        Dictionary<string, int> mergedGenres = new Dictionary<string, int>();

        foreach (var artist in artists.Items)
        {
            foreach (var genre in artist.Genres)
            {
                if (mergedGenres.ContainsKey(genre))
                {
                    mergedGenres[genre]++;
                }
                else
                {
                    mergedGenres[genre] = 1;
                }
            }
        }

        var sortedGenres = mergedGenres.OrderByDescending(pair => pair.Value).ToList();
        List<GenreSnapshotContent> genreSnapshots = new List<GenreSnapshotContent>();
        TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;
        int rank = 1;

        foreach (var genre in sortedGenres)
        {
            if (rank > 50)
            {
                break;
            }

            genreSnapshots.Add(new GenreSnapshotContent
            {
                Rank = rank,
                Genre = textInfo.ToTitleCase(genre.Key),
            });

            rank++;
        }

        return genreSnapshots;
    }

    internal int LimitResultsLength(int resultLength)
    {
        switch (resultLength)
        {
            case > 50:
                resultLength = 50;
                break;
            case <= 0:
                resultLength = 1;
                break;
        }

        return resultLength;
    }

    internal async Task<string> RefreshAccessToken(string accessToken, string refreshToken)
    {

        var spotify = new SpotifyClient(accessToken);

        try
        {
            await spotify.Personalization.GetTopTracks(new PersonalizationTopRequest
            {
                Limit = 1,
                TimeRangeParam = PersonalizationTopRequest.TimeRange.ShortTerm
            });
        }
        catch (Exception ex)
        {
            if (ex.Message == "The access token expired")
            {

                var newResponse = await new OAuthClient().RequestToken(
                    new AuthorizationCodeRefreshRequest("424b83115a5644a18528d7477ca61d18", "cfaa1d89ddec461a8e534a0437466045", refreshToken)
                );

                accessToken = newResponse.AccessToken;

            }
        }

        return accessToken;
    }
}
