using SpottedChartsAPIDomain;

namespace SpottedChartsAPI
{
    public class UserRepository : IUserRepository
    {
        private string _connectionString;
        public UserRepository(string connectionString) 
        { 
            _connectionString = connectionString;
        }

        public bool CheckIfUserExists(User userData)
        {
            return false;
        }
    }
}
