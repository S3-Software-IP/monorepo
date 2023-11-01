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
        public void Add(User user);

        public User Read(string userId);s
    }
}
