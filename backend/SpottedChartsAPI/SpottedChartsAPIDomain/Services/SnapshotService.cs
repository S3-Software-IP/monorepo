using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPIDomain.Services
{
    public class SnapshotService
    {

        private readonly ISnapshotRepository _snapshotRepository;
        public SnapshotService(ISnapshotRepository snapshotRepository)
        {
            _snapshotRepository = snapshotRepository;
        }

        public List<SnapshotDTO> GetAll(string userId)
        {
            List<SnapshotDTO> consents = _snapshotRepository.GetByUser(userId);
            return consents;
        }
    }
}
