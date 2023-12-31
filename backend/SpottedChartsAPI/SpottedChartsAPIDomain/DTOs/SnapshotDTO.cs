using SpottedChartsAPIDomain.Models.SnapshotsContent;


namespace SpottedChartsAPIDomain.DTOs;

public class SnapshotDTO
{
    public Guid Id { get; set; } = Guid.Empty!;
    public Guid UserId { get; set; }
    public DateTime DateTaken { get; set; }
    public List<ArtistSnapshotsContent> Artists { get; set; } = new List<ArtistSnapshotsContent>();
    public List<SongSnapshotsContent> Songs { get; set; } = new List<SongSnapshotsContent>();
    public List<GenreSnapshotContent> Genres { get; set; } = new List<GenreSnapshotContent>();
}
