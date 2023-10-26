namespace SpottedChartsAPI
{
    public class UserRepository
    {
        private string _connectionString;
        public UserRepository(string connectionString) 
        { 
            _connectionString = connectionString;
        }

        public bool CheckIfUserExists(UserData userData)
        {
            
        }
    }
}
