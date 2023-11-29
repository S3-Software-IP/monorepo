using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Interfaces;
using SpottedChartsAPIDomain.Models.SnapshotsContent;

namespace SpottedChartsAPIDomain.Services
{
    public class SnapshotService : ISnapshotService
    {
        private readonly ISnapshotRepository _snapshotRepository;
        private readonly IUserService _userService;
        public SnapshotService(ISnapshotRepository snapshotRepository, IUserService userService)
        {
            _snapshotRepository = snapshotRepository;
            _userService = userService;
        }

        public async Task<List<SnapshotDTO>> GetBySpotifyId(string spotifyUserId)
        {
            List<SnapshotDTO> snapshots = _snapshotRepository.GetByUserId(spotifyUserId);
            DateTime todayDate = DateTime.Now.Date;

            if (snapshots.Count == 0 || snapshots.Last().DateTaken.Date != todayDate)
            {
                UserDTO user = _userService.GetUser(spotifyUserId);
                SpotifyService spotifyService = new SpotifyService();

                List<SongSnapshotsContent> tracks = await spotifyService.GetTopTracks(user.AuthToken, user.RefreshToken, 50);
                List<ArtistSnapshotsContent> artists = await spotifyService.GetTopArtists(user.AuthToken, user.RefreshToken, 50);
                List<GenreSnapshotContent> genres = await spotifyService.GetTopGenres(user.AuthToken, user.RefreshToken, 50);

                SnapshotDTO snapshot = new SnapshotDTO
                {
                    Id = Guid.NewGuid(),
                    UserId = user.Id,
                    DateTaken = DateTime.Now,
                    Artists = artists,
                    Songs = tracks,
                    Genres = genres
                };

                if (this.Create(snapshot) == false)
                {
                    return snapshots;
                };

                snapshots = await GetBySpotifyId(spotifyUserId);
            }

            return snapshots;
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
