using Newtonsoft.Json;
using SpottedChartsAPIDomain.Enums;

namespace SpottedChartsAPIDomain.Services
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }




        /*  public User Register(User user)
          {
              //validation
              //_userRepository.Add(user);
              return user;
          }
  */
        public object GetSnapshot(string spotifyId, SnapShotType snapShotType, int snapShot_id)
        {
            object jsonfile = _userRepository.GetJsonSnapShot(spotifyId, snapShotType, snapShot_id);
            if (!ValidateJsonFile(jsonfile))
            {
                throw new Exception("no json file");
            }
            //string jsonFileContent = File.ReadAllText(jsonfile.ToString());
            //if(!ValidateJsonFileContent(jsonFileContent))
            //{
            //throw new Exception("no json file content");
            //}
            return jsonfile;
        }

        public bool ValidateJsonFile(object jsonFile)
        {
            if (jsonFile == null)
            {
                return false;
            }
            return true;
        }

        public bool ValidateJsonFileContent(string jsonfile)
        {
            try
            {
                JsonConvert.DeserializeObject(jsonfile);
                return true;
            }
            catch (JsonException)
            {
                return false;
            }
        }

        /*public async Task NewUser(string code)
        {
            
            Uri uri = Uri("http://localhost:5543");
            var response = await new OAuthClient().RequestToken(
            new AuthorizationCodeTokenRequest("ClientId", "ClientSecret", code, uri));

            var spotify = new SpotifyClient(response.AccessToken);
            
        }
        */
    }
}
