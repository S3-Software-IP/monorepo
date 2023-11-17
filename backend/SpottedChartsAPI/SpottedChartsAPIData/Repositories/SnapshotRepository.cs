using AutoMapper;
using Microsoft.Extensions.Configuration;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Interfaces;
using SpottedChartsAPIDomain.Models;

namespace SpottedChartsAPIData.Repositories
{
    public class SnapshotRepository : ISnapshotRepository
    {
        private readonly string _connectionString;
        private readonly IMapper _mapper;

        public SnapshotRepository(IConfiguration configuration, IMapper mapper)
        {
            _connectionString = configuration.GetConnectionString("MySqlDB");
            _mapper = mapper;
        }

        public void Create(SnapshotDTO snapshot)
        {
            throw new NotImplementedException();
        }

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public SnapshotDTO GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public List<SnapshotDTO> GetByUser(string userId)
        {
            using (var dbContext = new SpottedChartsContext(_connectionString))
            {
                var snapshotEntities = dbContext.Snapshots
                    .Where(s => s.UserId == userId)
                    .ToList();

                var snapshotDTOs = _mapper.Map<List<SnapshotDTO>>(snapshotEntities);

                return snapshotDTOs;
            }
        }

        public void Update(SnapshotDTO snapshot)
        {
            throw new NotImplementedException();
        }
    }
}
