using SpottedChartsAPIDomain.DTOs;

namespace SpottedChartsAPIDomain.Interfaces;

public interface IUserService
{
    UserDTO UserAuth(UserDTO user);
    void Update(UserDTO user);
    void Delete(Guid userId);
    UserDTO GetUser(string spotify_id);
}
