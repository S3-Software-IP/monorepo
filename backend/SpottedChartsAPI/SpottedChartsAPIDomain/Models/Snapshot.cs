
namespace SpottedChartsAPIDomain.Models;

public partial class Snapshot
{
    public Guid Id { get; set; } = Guid.Empty;

    public string? UserId { get; set; }

    public DateTime? DateTaken { get; set; }

    public string? SongSnapshot { get; set; }

    public string? ArtistSnapshot { get; set; }

    public string? GenreSnapshot { get; set; }

    public virtual User? User { get; set; }
}
