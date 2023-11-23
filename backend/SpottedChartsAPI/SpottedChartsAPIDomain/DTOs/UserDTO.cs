namespace SpottedChartsAPIDomain.DTOs;

public class UserDTO
{
    public Guid Id { get; set; } = Guid.Empty;
    public string? SpotifyUserId { get; set; }
    public string? Email { get; set; }
    public string? AuthToken { get; set; }
    public string? RefreshToken { get; set; }
}