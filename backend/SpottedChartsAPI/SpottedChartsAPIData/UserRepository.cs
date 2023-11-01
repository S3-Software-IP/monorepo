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

        public void Add(User user)
        {
            string insertQuery = "INSERT INTO users (id, spotify_user_id, email, authorization_token, refresh_token) VALUES (@Id, @SpotifyUserId, @Email, @AuthorizationToken, @RefreshToken)";

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand(insertQuery, connection))
                {
                    command.Parameters.AddWithValue("@Id", user.Id);
                    command.Parameters.AddWithValue("@SpotifyUserId", user.SpotifyId);
                    command.Parameters.AddWithValue("@Email", user.Email);
                    command.Parameters.AddWithValue("@AuthorizationToken,", user.AuthorizationToken);
                    command.Parameters.AddWithValue("@RefreshToken", user.Email);

                    connection.Open();

                    command.ExecuteNonQuery();
                }
            }
        }

        public User Read(string userId)
        {
            string selectQuery = "SELECT id, spotify_user_id, email, authorization_token, refresh_token FROM users WHERE id = @UserId";
            User user = null;

            using (SqlConnection connection = new SqlConnection(_connectionString))
            {
                using (SqlCommand command = new SqlCommand(selectQuery, connection))
                {
                    command.Parameters.AddWithValue("@UserId", userId);

                    connection.Open();

                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            user = new User
                            {
                                Id = (Guid)reader["id"],
                                SpotifyId = reader["spotify_user_id"].ToString(),
                                Email = reader["email"].ToString(),
                                AuthorizationToken = reader["authorization_token"].ToString(),
                                RefreshToken = reader["refresh_token"].ToString()
                            };
                        }
                    }
                }
            }

            return user;
        }

    }
}
