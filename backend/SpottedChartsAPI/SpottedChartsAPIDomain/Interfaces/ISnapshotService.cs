using SpottedChartsAPIDomain.DTOs;

namespace SpottedChartsAPIDomain.Interfaces;

public interface ISnapshotService
{
    Task<List<SnapshotDTO>> GetBySpotifyId(string spotifyUserId);
    SnapshotDTO GetById(Guid snapshotId);
    bool Delete(Guid id);
    bool Create(SnapshotDTO snapshotDTO);
    bool DeleteAllBySpotifyUserId(string SpotifyUserId);
}
