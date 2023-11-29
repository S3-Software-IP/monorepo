using SpottedChartsAPIDomain.DTOs;

namespace SpottedChartsAPIDomain.Interfaces;

public interface IUserService
{
    UserDTO AddUser(UserDTO user);
    void Update(UserDTO user);
    void Delete(Guid userId);
    UserDTO GetUser(string spotify_id);
}
