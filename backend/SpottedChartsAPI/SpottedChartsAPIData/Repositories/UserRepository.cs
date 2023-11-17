using SpottedChartsAPIDomain;
using System.Data.SqlClient;
using SpottedChartsAPIDomain.Enums;
using SpottedChartsAPIDomain.intefaces;
using SpottedChartsAPIDomain.Models;

namespace SpottedChartsAPIData.Repositories
{
    public class UserRepository : IUserRepository
    {
        private string _connectionString;
        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public object Get(string spotifyId, SnapShotType snapShotType, int snapShotVersion)
        {
            object json = new object();
            return json;
        }

        public bool CheckIfUserExists(string userId)
        {
            return false;
        }

        public void Create(User user)
        {

        }

    }
}
