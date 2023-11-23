using SpottedChartsAPIDomain.Enums;

namespace SpottedChartsAPIDomain
{
    public interface IUserRepository
    {
        public object GetJsonSnapShot(string spotifyId, SnapShotType snapShotType, int snapShotVersion);
    }
}
