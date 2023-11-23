using SpottedChartsAPIDomain.DTOs;

namespace SpottedChartsAPIDomain.intefaces
{
    public interface IUserRepository
    {
        public void Create(UserDTO user);
        public UserDTO Get(string spotifyId);
        public void Update(UserDTO user);
        public void Delete(Guid userId);
        public bool DoesUserExist(string spotifyId);
    }
}
