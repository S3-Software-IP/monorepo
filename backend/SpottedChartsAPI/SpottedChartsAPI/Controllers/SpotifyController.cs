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
            return Task.CompletedTask;
        }

        [HttpGet]
        [Route("/auth/")]
        public Task<User> UserAuth([FromBody] User user)
        {
            try
            {
                var returnUser = _userService.UserAuth(user);
                return Task.FromResult(returnUser);
            }
            catch(Exception ex)
            {
                return Task.FromException<User>(ex);
            }
        }
    }
}

