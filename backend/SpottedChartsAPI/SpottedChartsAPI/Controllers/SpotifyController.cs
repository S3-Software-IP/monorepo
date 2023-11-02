using Microsoft.AspNetCore.Mvc;
using Microsoft.SqlServer.Server;
using Newtonsoft.Json;
using SpottedChartsAPIDomain;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http.Headers;

namespace SpottedChartsAPI.Controllers
{
    public class SpotifyController : Controller
    {
        private readonly UserService _userService;
        private readonly IConfiguration _configuration;
        public SpotifyController(IConfiguration configuration) 
        {
            var connetionString = configuration.GetConnectionString("MySqlDB") ?? throw new NullReferenceException("forgor connection stringS");
            _configuration = configuration;
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

        /*[HttpGet]
        [Route("/api/spotify/getuserinfo")]
        public async Task<IActionResult> GetUserInfo(string authorizationCode, string refreshToken)
        {
            string clientId = _configuration["Spotify:ClientId"];
            string clientSecret = _configuration["Spotify:ClientSecret"];
            var usernew = new User();
            usernew.AuthorizationToken = authorizationCode;
            usernew.RefreshToken = refreshToken;

            if (string.IsNullOrEmpty(usernew.AuthorizationToken))
            {
                usernew.AuthorizationToken = await RefreshAccessToken(usernew);   

                if (string.IsNullOrEmpty(authorizationCode))
                {
                    return BadRequest("Failed to obtain a valid authorization code.");
                }
            }

            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", authorizationCode);
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
                    if (response.StatusCode == HttpStatusCode.Unauthorized)
                    {
                        authorizationCode = await RefreshAccessToken(refreshToken);

                        if (string.IsNullOrEmpty(authorizationCode))
                        {
                            return BadRequest("Failed to obtain a valid authorization code.");
                        }

                        httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", authorizationCode);
                        response = await httpClient.GetAsync(endpoint);

                        if (response.IsSuccessStatusCode)
                        {
                            string jsonContent = await response.Content.ReadAsStringAsync();
                            User user = JsonConvert.DeserializeObject<User>(jsonContent);
                            return Ok(user);
                        }
                    }

                    return BadRequest("Failed to retrieve user info.");
                }
            }
        }

        public async Task<User> RefreshAccessToken(User user)
        {
            string clientId = _configuration["Spotify:ClientId"];
            string clientSecret = _configuration["Spotify:ClientSecret"];
            string refreshToken = user.RefreshToken;
            string url = "https://accounts.spotify.com/api/token";

            var formData = new FormUrlEncodedContent(new Dictionary<string, string>
            {
                { "grant_type", "refresh_token" },
                { "refresh_token", refreshToken },
                { "client_id", clientId },
                { "client_secret", clientSecret }
            });

            using (var httpClient = new HttpClient())
            {
                var response = await httpClient.PostAsync(url, formData);

                if (response.IsSuccessStatusCode)
                {
                    var content = await response.Content.ReadAsStringAsync();
                    dynamic responseJson = JsonConvert.DeserializeObject(content);

                    string accessToken = responseJson.access_token;
                    string newRefreshToken = responseJson.refresh_token;

                    user.AuthorizationToken = accessToken;
                    user.RefreshToken = newRefreshToken;
                    return user;
                }
            }

            return user;
        }
        */
    }
}

