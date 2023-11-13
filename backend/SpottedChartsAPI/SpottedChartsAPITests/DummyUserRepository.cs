using SpottedChartsAPI;
using SpottedChartsAPIDomain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpottedChartsAPITests
{
    public class DummyUserRepository : IUserRepository
    {
        public List<User > Users { get; set; } = new List<User>();
        public User User { get; set; }

        object json { get; set; }

        public object GetJsonSnapShot(string spotifyId, SnapShotType snapShotType, int snapShotVersion)
        {
            return json;
        }


    }
}
