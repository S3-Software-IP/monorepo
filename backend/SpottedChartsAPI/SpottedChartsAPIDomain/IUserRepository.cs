using SpottedChartsAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpottedChartsAPIDomain
{
    public interface IUserRepository
    {
        public object GetJsonSnapShot(string spotifyId, SnapShotType snapShotType, int snapShotVersion);
    }
}
