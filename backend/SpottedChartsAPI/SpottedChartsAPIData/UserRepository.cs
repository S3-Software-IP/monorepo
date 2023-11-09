using SpottedChartsAPIDomain;
using System.Data.SqlClient;

namespace SpottedChartsAPI
{
    public class UserRepository : IUserRepository
    {
        private string _connectionString;
        public UserRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        
        public object GetJsonSnapShot(string spotifyId, SnapShotType snapShotType, int snapShotVersion)
        {
            object json = new object();
            return json;
        }

    }
}
