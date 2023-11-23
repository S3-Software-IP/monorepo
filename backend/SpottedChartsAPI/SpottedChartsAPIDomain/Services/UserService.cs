using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.intefaces;
using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPIDomain.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserDTO UserAuth(UserDTO user)
        {
            if (!_userRepository.DoesUserExist(user.SpotifyUserId))
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

        private void Create(UserDTO user)
        {
            _userRepository.Create(user);
        }

        public void Update(UserDTO user)
        {
            _userRepository.Update(user);
        }

        public void Delete(Guid userId)
        {
            _userRepository.Delete(userId);
        }

        public UserDTO GetUser(string spotify_id)
        {
            if (!IsSpotifyIdValid(spotify_id))
            {
                throw new Exception("Invalid Spotify id.");
            }

            var user = _userRepository.Get(spotify_id);

            return user;
        }

        private bool IsSpotifyIdValid(string spotify_id)
        {
            if (spotify_id != null || spotify_id.Length <= 30)
            {
                return true;
            }

            return false;
        }
    }
}
