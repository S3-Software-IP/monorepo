using SpottedChartsAPIDomain.DTOs;

namespace SpottedChartsAPIDomain.Interfaces;

public interface ISnapshotRepository
{
    public SnapshotDTO GetById(Guid id);
    public List<SnapshotDTO> GetByUser(string userId);
    public void Delete(Guid id);
    public void Update(SnapshotDTO snapshot);
    public void Create(SnapshotDTO snapshot);
}
