using SpottedChartsAPIDomain;
using System.Data.SqlClient;
using SpottedChartsAPIDomain.Enums;
using SpottedChartsAPIDomain.intefaces;
using SpottedChartsAPIDomain.Models;
using Microsoft.EntityFrameworkCore;

namespace SpottedChartsAPIData.Repositories
{
    public class UserRepository : IUserRepository
    {   
        private string _connectionString;
        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void Create(User user)
        {
            using (var dbContext = new SpottedChartsContext(_connectionString))
            {
                
                var userEntity = new User
                {
                    Id = Guid.NewGuid(),
                    SpotifyId = user.SpotifyId,
                    DisplayName = user.DisplayName,
                    Email = user.Email,
                    AuthorizationToken = user.AuthorizationToken,
                    RefreshToken = user.RefreshToken
                };

                dbContext.Users.Add(userEntity);
                dbContext.SaveChanges();
            }
        }

        public User ReadBy(Guid userId)
        {
            using (var dbContext = new SpottedChartsContext(_connectionString))
            {
                var userEntity = dbContext.Users.Find(userId);
                return userEntity;
            }
        }

        public List<User> ReadAll()
        {
            using (var dbContext = new SpottedChartsContext(_connectionString))
            {
                var users = dbContext.Users.ToList();
                return users;
            }
        }

        public void Update(User user)
        {
            using (var dbContext = new SpottedChartsContext(_connectionString))
            {
                var existingUser = dbContext.Users.Find(user.Id);

                if (existingUser != null)
                {
                    existingUser.SpotifyId = user.SpotifyId;
                    existingUser.DisplayName = user.DisplayName;
                    existingUser.Email = user.Email;
                    existingUser.AuthorizationToken = user.AuthorizationToken;
                    existingUser.RefreshToken = user.RefreshToken;

                    dbContext.SaveChanges();
                }
            }
        }

        public void Delete(Guid userId)
        {
            using (var dbContext = new SpottedChartsContext(_connectionString))
            {
                var userEntity = dbContext.Users.Find(userId);

                if (userEntity != null)
                {
                    dbContext.Users.Remove(userEntity);
                    dbContext.SaveChanges();
                }
            }
        }

        public bool CheckIfUserExists(string spotifyId)
        {
            using (var dbContext = new SpottedChartsContext(_connectionString))
            {
                return dbContext.Users.Any(u => u.SpotifyId == spotifyId);
            }
        }
    }
}
