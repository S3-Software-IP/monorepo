using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SpottedChartsAPIDomain;
using System.Net.Http.Headers;

namespace SpottedChartsAPI.Controllers
{
    public class SpotifyController : Controller
    {
        private readonly UserService _userService;
        public SpotifyController(IConfiguration configuration) 
        {
            var connetionString = configuration.GetConnectionString("MySqlDB") ?? throw new NullReferenceException("forgor connection stringS");
            _userService = new UserService(new UserRepository(connetionString));
        }

        public enum TimeRange
        {
            short_term,
            medium_term,
            long_term
        }

        [HttpGet]
        [Route("/api/spotify/gettoptracks")]
        public async Task<IActionResult> GetTopTracks(string bearerToken, TimeRange timeRange = TimeRange.medium_term, int limit = 50)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", bearerToken);
                string timeRangeStr = timeRange.ToString().Replace("_", "");
                string endpoint = $"https://api.spotify.com/v1/me/top/tracks?time_range={timeRangeStr}&limit={limit}";

                HttpResponseMessage response = await httpClient.GetAsync(endpoint);

                if (response.IsSuccessStatusCode)
                {
                    string responseBody = await response.Content.ReadAsStringAsync();
                    return Ok(responseBody);
                }
                else
                {
                    return BadRequest("Failed to receive tracks");
                }
            }
        }

        [HttpGet]
        [Route("/api/spotify/gettopartists")]
        public async Task<IActionResult> GetTopArtists(string bearerToken, TimeRange timeRange = TimeRange.medium_term, int limit = 50)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", bearerToken);
                string timeRangeStr = timeRange.ToString().Replace("_", "");
                string endpoint = $"https://api.spotify.com/v1/me/top/artists?time_range={timeRangeStr}&limit={limit}";

                HttpResponseMessage response = await httpClient.GetAsync(endpoint);

                if (response.IsSuccessStatusCode)
                {
                    string responseBody = await response.Content.ReadAsStringAsync();
                    return Ok(responseBody);
                }
                else
                {
                    return BadRequest("Failed to receive tracks");
                }
            }
        }

        [HttpGet]
        [Route("/api/spotify/getuserinfo")]
        public async Task<IActionResult> GetUserInfo(string bearerToken)
        {
            using (var httpClient = new HttpClient())
               {
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", bearerToken);
                string endpoint = "https://api.spotify.com/v1/me";
                HttpResponseMessage response = await httpClient.GetAsync(endpoint);

                if (response.IsSuccessStatusCode)
                {
                    string jsonContent = await response.Content.ReadAsStringAsync();
                    User user = JsonConvert.DeserializeObject<User>(jsonContent);
                    return Ok(user);
                }
            
                else
                {
                    return BadRequest("Failed to retrieve user info.");
                }
            }
        }

        [HttpPost]
        [Route("/api/spotify/check")]
        public async Task<IActionResult> GetUser(string bearerToken)
        {
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", bearerToken);
                string endpoint = "https://api.spotify.com/v1/me";
                HttpResponseMessage response = await httpClient.GetAsync(endpoint);

                if (response.IsSuccessStatusCode)
                {
                    string jsonContent = await response.Content.ReadAsStringAsync();
                    User user = JsonConvert.DeserializeObject<User>(jsonContent);
                    
                    

                }
            }
            return BadRequest("");
        }
    }
}
