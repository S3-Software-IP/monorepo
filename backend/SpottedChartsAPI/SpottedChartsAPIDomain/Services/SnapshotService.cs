using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPIDomain.Services
{
    public class SnapshotService : ISnapshotService
    {

        private readonly ISnapshotRepository _snapshotRepository;
        public SnapshotService(ISnapshotRepository snapshotRepository)
        {
            _snapshotRepository = snapshotRepository;
        }

        public List<SnapshotDTO> GetBySpotifyId(string spotifyUserId)
        {
            List<SnapshotDTO> consents = _snapshotRepository.GetByUserId(spotifyUserId);
            return consents;
        }

        public SnapshotDTO GetById(Guid snapshotId)
        {
            return _snapshotRepository.GetById(snapshotId);
        }

        public bool Delete(Guid id)
        {
            return _snapshotRepository.Delete(id);
        }

        public bool Create(SnapshotDTO snapshotDTO)
        {
            return _snapshotRepository.Create(snapshotDTO);

        }
    }
}
