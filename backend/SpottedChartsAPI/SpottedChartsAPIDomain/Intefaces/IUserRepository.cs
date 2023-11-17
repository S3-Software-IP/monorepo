using SpottedChartsAPIDomain.Enums;
using SpottedChartsAPIDomain.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpottedChartsAPIDomain.intefaces
{
    public interface IUserRepository
    {
        public object Get(string spotifyId, SnapShotType snapShotType, int snapShotVersion);
        public bool CheckIfUserExists(string userId);
        public void Create(User user);
    }
}
