using SpottedChartsAPIDomain.DTOs;

namespace SpottedChartsAPIDomain.Interfaces;

public interface ISnapshotService
{
    List<SnapshotDTO> GetBySpotifyId(string spotifyUserId);
    SnapshotDTO GetById(Guid snapshotId);
    bool Delete(Guid id);
    bool Create(SnapshotDTO snapshotDTO);
}
