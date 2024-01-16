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
        private readonly SpottedChartsContext _dbcontext;

        public SnapshotRepository(IConfiguration configuration, IMapper mapper)
        {
            _connectionString = configuration.GetConnectionString("MySqlDB");
            _mapper = mapper;
            _dbcontext = new SpottedChartsContext(_connectionString);
        }

        public bool Create(SnapshotDTO snapshot)
        {
            try
            {
                Snapshot convertedSnapshot = _mapper.Map<Snapshot>(snapshot);
                _dbcontext.Add(convertedSnapshot);
                _dbcontext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }

        }

        public bool Delete(Guid id)
        {
            try
            {
                var snapshotToDelete = _dbcontext.Snapshots.Single(s => s.Id == id);
                _dbcontext.Remove(snapshotToDelete);
                _dbcontext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }
        }

        public SnapshotDTO GetById(Guid id)
        {
            var snapshotEntity = _dbcontext.Snapshots
                .FirstOrDefault(s => s.Id == id);

            if (snapshotEntity == null)
            {
                return null;
            }

            var snapshotDTO = _mapper.Map<SnapshotDTO>(snapshotEntity);

            return snapshotDTO;
        }

        public List<SnapshotDTO> GetByUserId(string spotifyUserId)
        {
            var user = _dbcontext.Users
                .FirstOrDefault(u => u.SpotifyUserId == spotifyUserId);

            if (user == null)
            {
                return null;
            }

            var snapshotEntities = _dbcontext.Snapshots
                .Where(s => s.UserId == user.Id)
                .ToList();

            return _mapper.Map<List<SnapshotDTO>>(snapshotEntities);
        }

        public bool Update(SnapshotDTO snapshotDTO)
        {
            try
            {
                Snapshot oldSnapshot = _dbcontext.Snapshots.First(s => s.Id == snapshotDTO.Id);
                Snapshot convertedSnapshot = _mapper.Map<Snapshot>(snapshotDTO);

                IEnumerable<string> changedProperties = _dbcontext.Entry(oldSnapshot)
                    .Properties.Where(x => x.OriginalValue != x.CurrentValue)
                    .Select(x => x.Metadata.Name);

                foreach (var propertyName in changedProperties)
                {
                    oldSnapshot
                        .GetType()
                        .GetProperty(propertyName)?
                        .SetValue(oldSnapshot, convertedSnapshot
                        .GetType()
                        .GetProperty(propertyName)?
                        .GetValue(convertedSnapshot));
                }

                _dbcontext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }

        }

        public bool DeleteAllByUserId(string UserId)
        {
            try
            {
                var snapshotsToDelete = _dbcontext.Snapshots.Where(s => s.UserId == UserId);
                _dbcontext.RemoveRange(snapshotsToDelete);
                _dbcontext.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return false;
            }
        }
    }
}
