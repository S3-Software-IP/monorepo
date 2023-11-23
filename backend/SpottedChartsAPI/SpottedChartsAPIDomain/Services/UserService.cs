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

        public User UserAuth(User user)
        {
            if (!_userRepository.CheckIfUserExists(user.SpotifyUserId))
            {
                try
                {
                    Create(user);
                    return user;
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
            else
            {
                try
                {
                    GetUser(user.SpotifyUserId);
                    return user;
                }
                catch (Exception ex)
                {
                    throw;
                }
            }
        }

        private void Create(User user)
        {
            if(!IsUserValid(user))
            {
                throw new Exception("User validation failed.");
            }
            _userRepository.Create(user);
        }

        public void Update(User user)
        {
            if (!IsUserValid(user))
            {
                throw new Exception("User validation failed.");
            }
            _userRepository.Update(user);
        }

        public void Delete(User user)
        {
            if (!IsUserValid(user))
            {
                throw new Exception("User validation failed.");
            }
            _userRepository.Delete(Guid.Parse(user.Id));
        }

        private User GetUser(string spotify_id)
        {
            if(!IsSpotifyIdValid(spotify_id))
            {
                throw new Exception("Unvalid Sotify id.");
            }
            var user = _userRepository.Get(spotify_id);
            if(!IsUserValid(user))
            {
                throw new Exception("An unvalid user got returned.");
            }
            return user;
        }

        public List<User> GetAllUsers()
        {
            List<User> users;
            users = _userRepository.GetAll();
            foreach (User user in users)
            {
                if (!IsUserValid(user))
                {
                    throw new Exception("An unvalid user got returned.");
                }
            }
            return users;
        }

        private bool IsUserValid(User user)
        {
            if(user.Id != null && user.SpotifyUserId != null && user.Email != null && user.RefreshToken != null && user.AuthToken != null && user.DisplayName != null)
            {
                return true;
            }
            else return false;
        }

        private bool IsSpotifyIdValid(string spotify_id)
        {
            if (spotify_id != null || spotify_id.Length <= 30)
            {
                return true;
            }
            else return false;
        }
    }
}
