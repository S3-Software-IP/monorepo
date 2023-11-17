using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using SpotifyAPI.Web;
using SpotifyAPI.Web.Http;
using Swan;
using Newtonsoft.Json;
using System.Diagnostics;
using System.Runtime.InteropServices;
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
                SpotifyId = PrivateUser.Id,
                DisplayName = PrivateUser.DisplayName,
                Email = PrivateUser.Email,
            };

            return User;
        }

    }
}
