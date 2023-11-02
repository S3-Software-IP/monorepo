using SpottedChartsAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpottedChartsAPIDomain
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository) 
        {
            _userRepository = userRepository;
        }

        public bool CheckIfUserExists(User user)
        {
            var UserFromDB = _userRepository.Read(user.SpotifyId); //make seprate method
            if (UserFromDB == null)
            {
                return false;
            }
            else { return true; }
        }

        public User UserHandle(User user)
        {
            //validation
            if (!CheckIfUserExists(user))
            {
                Register(user);
                return user;
            }
            else
            {
                var returnUser = _userRepository.Read(user.SpotifyId);
                return returnUser;
            }
        }

        public User Register(User user)
        {
            //validation
            _userRepository.Add(user);
            return user;
        }
    }
}
