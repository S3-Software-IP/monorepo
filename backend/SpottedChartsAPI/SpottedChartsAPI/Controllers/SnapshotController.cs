using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SpottedChartsAPIData.Repositories;
using SpottedChartsAPIDomain.DTOs;
using SpottedChartsAPIDomain.Services;

namespace SpottedChartsAPI.Controllers
{
    public class SnapshotController : Controller
    {
        private readonly SnapshotService _snapshotService;

        public SnapshotController(IConfiguration configuration, IMapper mapper)
        {
            _snapshotService = new SnapshotService(new SnapshotRepository(configuration, mapper));
        }

        [HttpGet]
        [Route("/snapshots/")]
        public List<SnapshotDTO> GetAllSnapshots(string colleague_id)
        {
            var result = _snapshotService.GetAll(colleague_id);
            return result;
        }
    }
}
