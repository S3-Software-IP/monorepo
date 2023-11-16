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

namespace SpottedChartsAPIDomain
{
    public class SpotifyService
    {
        private readonly IConfiguration _configuration;
        public SpotifyService(IConfiguration configuration) 
        {
            _configuration  = configuration;
        }
        
        public async Task<string> SpotifyRequests(string accessToken)
        {
            var spotify = new SpotifyClient(accessToken);
            var Tracks =  await spotify.Personalization.GetTopTracks();
            var Artists = await spotify.Personalization.GetTopArtists();

            var ConvTracks = JsonConvert.SerializeObject(Tracks.Items);
            var ConvArtists = JsonConvert.SerializeObject(Artists.Items);

            var respones = ConvTracks + ConvArtists;

            return respones;
        }

        
    }
}
