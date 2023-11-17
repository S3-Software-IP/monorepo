using System;
using System.Collections.Generic;

namespace SpottedChartsAPIDomain.Models;

public partial class User
{
    public string Id { get; set; } = null!;

    public string? SpotifyUserId { get; set; }

    public string? Email { get; set; }

    public string? AuthToken { get; set; }

    public string? RefreshToken { get; set; }

    public virtual ICollection<Snapshot> Snapshots { get; set; } = new List<Snapshot>();
}
