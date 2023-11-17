using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.SqlServer.Server;
using Newtonsoft.Json;
using SpotifyAPI.Web;
using SpottedChartsAPIDomain.Enums;
using SpottedChartsAPIDomain.Models;
using SpottedChartsAPIDomain.Services;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http.Headers;
using SpottedChartsAPIData.Repositories;

namespace SpottedChartsAPI.Controllers
{
    public class SpotifyController : Controller
    {
        private readonly UserService _userService;
        private readonly IConfiguration _configuration;
        public SpotifyController(IConfiguration configuration)
        {
            var connetionString = configuration.GetConnectionString("MySqlDB") ?? throw new NullReferenceException("forgor connection stringS");
            _userService = new UserService(new UserRepository(connetionString), configuration);
            _configuration = configuration;
        }

        [HttpGet]
        [Route("/snapshots/{snapshotId}")]
        public Task GetSnapShot(int snapshotId, SnapShotType snapShotType, string spotifyUserId)
        {
            try
            {
                var jsonfile = _userService.GetSnapshot(spotifyUserId, snapShotType, snapshotId);
                return Task.FromResult(jsonfile);
            }
            catch (Exception ex)
            {
                return Task.FromException(ex);
            }
        }

        [HttpPost]
        [Route("/auth/")]
        public Task UserAuth([FromBody] User user)
        {
            try
            {
                _userService.UserAuth(user);
                return Task.CompletedTask;
            }
            catch(Exception ex)
            {
                return Task.FromException(ex);
            }
        }
    }
}

