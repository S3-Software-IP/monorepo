﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.SqlServer.Server;
using Newtonsoft.Json;
using SpottedChartsAPIDomain;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http.Headers;

namespace SpottedChartsAPI.Controllers
{
    public class SpotifyController : Controller
    {
        private readonly UserService _userService;
        public SpotifyController(IConfiguration configuration) 
        {
            var connetionString = configuration.GetConnectionString("MySqlDB") ?? throw new NullReferenceException("forgor connection stringS");
            _userService = new UserService(new UserRepository(connetionString));
        }

        [HttpGet]
        [Route("/snapshots/{snapshot_id}")]
        public Task GetSnapShot(int snapshot_id, SnapShotType snapShotType, string spotifyUserId)
        {
            try
            {
                var jsonfile = _userService.GetSnapshot(spotifyUserId, snapShotType, snapshot_id);
                return Task.FromResult(jsonfile);
            }
            catch(Exception ex)
            {
                return Task.FromException(ex);
            }
        }

        [HttpPost]
        [Route("/auth/")]
        public Task UserAuth([FromBody] User user)
        {
            return Task.CompletedTask;
        }
    }
}
