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
        public void Create(User user);
        public User ReadBy(Guid userId);
        public List<User> ReadAll();
        public void Update(User user);
        public void Delete(Guid userId);
        public bool CheckIfUserExists(string userId);
    }
}
