using Microsoft.AspNetCore.Mvc;
using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPI.Controllers
{
    public class SnapshotController : Controller
    {
        private readonly ISnapshotService _snapshotService;
        private readonly IUserService _userService;

        public SnapshotController(ISnapshotService snapshotService, IUserService userService)
        {
            _snapshotService = snapshotService;
            _userService = userService;
        }

        [HttpGet]
        [Route("/snapshots/{spotifyUserId}")]
        public async Task<IActionResult> GetAllBySpotifyId(string spotifyUserId)
        {
            if (string.IsNullOrEmpty(spotifyUserId))
            {
                return BadRequest("The passed Spotify user id was empty or invalid.");
            }

            var user = _userService.GetUser(spotifyUserId);

            if (user == null)
            {
                return NotFound("This ID is not associated or registered.");
            }

            var snapshots = await _snapshotService.GetBySpotifyId(spotifyUserId);

            if (snapshots == null)
            {
                return NotFound($"User '{spotifyUserId}' was not found.");
            }

            return Ok(snapshots);
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

            return BadRequest("The passed snapshot UUID was invalid, poorly structured, or empty.");
        }

        [HttpDelete]
        [Route("/snapshots/{spotifyUserId}")]
        public async Task<IActionResult> DeleteAllBySpotifyUserId(string spotifyUserId)
        {
            if (string.IsNullOrEmpty(spotifyUserId))
            {
                return BadRequest("The passed Spotify user id was empty or invalid.");
            }

            var user = _userService.GetUser(spotifyUserId);

            if (user == null)
            {
                return NotFound("This ID is not associated or registered.");
            }

            var snapshots = await _snapshotService.GetBySpotifyId(spotifyUserId);

            if (snapshots == null)
            {
                return NotFound($"User '{spotifyUserId}' was not found.");
            }

            _snapshotService.DeleteAllBySpotifyUserId(spotifyUserId);

            return Ok();
        }    
    }
}
