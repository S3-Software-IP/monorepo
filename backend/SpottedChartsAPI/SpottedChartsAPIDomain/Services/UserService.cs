using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using SpotifyAPI.Web;
using SpottedChartsAPIDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Nodes;
using System.Threading.Tasks;
using SpottedChartsAPIDomain.intefaces;
using SpottedChartsAPIDomain.Enums;

namespace SpottedChartsAPIDomain.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;
        private readonly SpotifyService _spotifyService;
        public UserService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _spotifyService = new SpotifyService(configuration);
        }

        public void UserAuth(User user)
        {
            if (!_userRepository.CheckIfUserExists(user.SpotifyId))
            {
                Register(user);
            }
        }

        public object GetSnapshot(string spotifyId, SnapShotType snapShotType, int snapShot_id)
        {
            object jsonfile = _userRepository.Get(spotifyId, snapShotType, snapShot_id);
            return jsonfile;
        }

        private void Register(User user)
        {
            _userRepository.Create(user);
        }
    }
}
