using SpottedChartsAPIDomain.DTOs;

namespace SpottedChartsAPIDomain.Interfaces;

public interface ISnapshotRepository
{
    public SnapshotDTO GetById(Guid id);
    public List<SnapshotDTO> GetByUserId(string userId);
    public bool Delete(Guid id);
    public bool Update(SnapshotDTO snapshot);
    public bool Create(SnapshotDTO snapshot);
    public bool DeleteAllByUserId(string userId);
}
