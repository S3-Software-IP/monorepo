using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Specialized;

namespace SpottedChartsAPIDomain.Models
{
    public class User
    {
        public Guid Id { get; set; }
        [JsonProperty("id")]
        public string SpotifyId { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string AuthorizationToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
