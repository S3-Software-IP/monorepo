using SpottedChartsAPIDomain.Enums;
using SpottedChartsAPIDomain.intefaces;
using SpottedChartsAPIDomain.Models;
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

        public object Get(string spotifyId, SnapShotType snapShotType, int snapShotVersion)
        {
            return new object();
        }
        public bool CheckIfUserExists(string userId)
        {
            return true;
        }
        public void Create(User user)
        {

        }


    }
}
