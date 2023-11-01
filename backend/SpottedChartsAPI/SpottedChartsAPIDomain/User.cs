namespace SpottedChartsAPI
{
    public class User
    {
        public Guid Id { get; set; }
        public string SpotifyId { get; set; }
        public string DisplayName { get; set; }
        public string Email { get; set; }
        public string AuthorizationToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
