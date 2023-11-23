using Microsoft.AspNetCore.Mvc;
using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPI.Controllers
{
    public class SnapshotController : Controller
    {
        private readonly ISnapshotService _snapshotService;

        public SnapshotController(ISnapshotService snapshotService)
        {
            _snapshotService = snapshotService;
        }

        [HttpGet]
        [Route("/snapshots/{spotifyUserId}")]
        public IActionResult GetAllBySpotifyId(string spotifyUserId)
        {
            if (string.IsNullOrEmpty(spotifyUserId))
            {
                return BadRequest("The passed Spotify user id was empty or invalid.");
            }

            var result = _snapshotService.GetBySpotifyId(spotifyUserId);
            return result == null ? NotFound($"User '{spotifyUserId}' was not found.") : Ok(result);
        }

        [HttpGet]
        [Route("/snapshots/")]
        public IActionResult GetSingleById(string snapshotId)
        {
            if (Guid.TryParse(snapshotId, out Guid id))
            {
                var result = _snapshotService.GetById(id);
                return result == null ? NotFound($"Snapshot with id '{id}' was not found.") : Ok(result);
            }
            else
            {
                return BadRequest("The passed snapshot UUID was invalid, poorly structured, or empty.");
            }
        }
    }
}
