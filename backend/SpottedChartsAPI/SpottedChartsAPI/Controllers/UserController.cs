using Microsoft.AspNetCore.Mvc;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Interfaces;

namespace SpottedChartsAPI.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [Route("/user/")]
        public Task<UserDTO> UserAuth([FromBody] UserDTO user)
        {
            try
            {
                var returnUser = _userService.AddUser(user);
                return Task.FromResult(returnUser);
            }
            catch (Exception ex)
            {
                return Task.FromException<UserDTO>(ex);
            }
        }

        [HttpGet]
        [Route("/me/{spotifyUserId}")]
        public UserDTO GetUserById(string spotifyUserId)
        {
            return _userService.GetUser(spotifyUserId);
        }

        [HttpPost]
        [Route("/me/{spotifyUserId}")]
        public IActionResult AddUser([FromBody] UserDTO user)
        {
            UserDTO existingUser;
            try
            {
                existingUser = _userService.GetUser(user.SpotifyUserId);
            }
            catch
            {
                return BadRequest("The provided ID is invalid.");
            }

            if (existingUser != null)
            {
                return NoContent();
            }

            var createdUser = _userService.AddUser(user);
            return Ok("Succesfully created user: " + createdUser);
        }
    }
}

