using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using SpotifyAPI.Web;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Models;

namespace SpottedChartsAPIDomain.Services
{
    public class SpotifyService
    {
        private readonly IConfiguration _configuration;
        public SpotifyService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<string> SpotifyRequests(string accessToken)
        {
            var spotify = new SpotifyClient(accessToken);
            var tracks = await spotify.Personalization.GetTopTracks();
            var artists = await spotify.Personalization.GetTopArtists();

            var combinedResponse = new
            {
                Tracks = tracks.Items,
                Artists = artists.Items
            };

            var jsonResponse = JsonConvert.SerializeObject(combinedResponse);

            return jsonResponse;
        }

        public async Task<User> SpotifyMeRequest(string accessToken)
        {
            var spotify = new SpotifyClient(accessToken);
            var PrivateUser = await spotify.UserProfile.Current();
            var User = new User
            {
                SpotifyUserId = PrivateUser.Id,
                Email = PrivateUser.Email,
            };

            return User;
        }

        public List<SnapshotDTO> GetUserId(string spotifyUserId)
        {
            return new List<SnapshotDTO>();
        }
    }
}
