namespace SpottedChartsAPI.Controllers
{
    /* public class SpotifyController : Controller
     {
         private readonly UserService _userService;
         public SpotifyController(IConfiguration configuration)
         {
             var connetionString = configuration.GetConnectionString("MySqlDB") ?? throw new NullReferenceException("forgor connection stringS");
             _userService = new UserService(new UserRepository(connetionString));
         }

         [HttpGet]
         [Route("/snapshots/{snapshotId}")]
         public Task GetSnapShot(int snapshotId, SnapShotType snapShotType, string spotifyUserId)
         {
             try
             {
                 var jsonfile = _userService.GetSnapshot(spotifyUserId, snapShotType, snapshotId);
                 return Task.FromResult(jsonfile);
             }
             catch (Exception ex)
             {
                 return Task.FromException(ex);
             }
         }

         [HttpPost]
         [Route("/auth/")]
         public Task UserAuth([FromBody] User user)
         {
             return Task.CompletedTask;
         }
     }*/
}

