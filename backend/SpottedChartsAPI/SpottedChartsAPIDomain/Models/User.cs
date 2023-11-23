using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Specialized;

namespace SpottedChartsAPIDomain.Models
{
    public class User
    {
        public string Id { get; set; } = null!;
        public string? SpotifyUserId { get; set; }
        public string? DisplayName { get; set; }
        public string? Email { get; set; }
        public string? AuthToken { get; set; }
        public string? RefreshToken { get; set; }
        public virtual ICollection<Snapshot> Snapshots { get; set; } = new List<Snapshot>();
    }
}
