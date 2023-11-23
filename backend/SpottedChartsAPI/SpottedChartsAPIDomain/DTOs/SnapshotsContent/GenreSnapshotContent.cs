using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPIDomain.Models.SnapshotsContent;


public class GenreSnapshotContent : ISnapshotContent
{
    public int Rank { get; set; }
    public string Genre { get; set; }
}
