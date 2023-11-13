using SpotifyAPI.Web;
using SpottedChartsAPIDomain;

namespace SpottedChartsAPITests
{
    public class UnitTest1
    {
        [Fact]
        public void TestSnapShot()
        {
            DummyUserRepository repository = new DummyUserRepository();
            UserService userService = new UserService(repository);
            
            string spotify_id = "morris.hannessen";
            int snapshotId = 1;
            object snapshot = userService.GetSnapshot(spotify_id, 0, snapshotId);

            Assert.NotNull(snapshot);
        }
    }
}