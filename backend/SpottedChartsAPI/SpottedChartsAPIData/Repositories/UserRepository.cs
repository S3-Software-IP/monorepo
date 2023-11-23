using AutoMapper;
using Microsoft.Extensions.Configuration;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.intefaces;
using SpottedChartsAPIDomain.Models;


namespace SpottedChartsAPIData.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly string _connectionString;
        private readonly IMapper _mapper;
        private readonly SpottedChartsContext _dbcontext;
        public UserRepository(IConfiguration configuration, IMapper mapper)
        {
            _connectionString = configuration.GetConnectionString("MySqlDB");
            _mapper = mapper;
            _dbcontext = new SpottedChartsContext(_connectionString);
        }

        public void Create(UserDTO user)
        {
            User convertedUser = _mapper.Map<User>(user);
            _dbcontext.Users.Add(convertedUser);
            _dbcontext.SaveChanges();
        }

        public UserDTO Get(string spotifyId)
        {
            User userEntity = _dbcontext.Users.FirstOrDefault(u => u.SpotifyUserId == spotifyId);
            return _mapper.Map<UserDTO>(userEntity);
        }

        public void Update(UserDTO user)
        {
            var existingUser = _dbcontext.Users.Find(user.Id);

            if (existingUser != null)
            {
                existingUser.SpotifyUserId = user.SpotifyUserId;
                existingUser.Email = user.Email;
                existingUser.AuthToken = user.AuthToken;
                existingUser.RefreshToken = user.RefreshToken;

                _dbcontext.SaveChanges();
            }
        }

        public void Delete(Guid userId)
        {
            var userEntity = _dbcontext.Users.Find(userId);

            if (userEntity != null)
            {
                _dbcontext.Users.Remove(userEntity);
                _dbcontext.SaveChanges();
            }
        }

        public bool DoesUserExist(string spotifyId)
        {
            return _dbcontext.Users.Any(u => u.SpotifyUserId == spotifyId);
        }

    }
}
