using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Airline.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Airline.Controllers
{
    
    public class AirlineOverrideTargetController : Controller
    {
        AirlineDataAccessLayer objairlineoverridetarget = new AirlineDataAccessLayer();
        [HttpGet]
        [Route("api/AirlineOverrideTarget/Index")]
        public IEnumerable<AirlineOverrideTarget> Index()
        {
            return objairlineoverridetarget.GetAllAirlineOverrideTarget();
        }
        [HttpPost]
        [Route("api/AirlineOverrideTarget/Create")]
        public int Create(AirlineOverrideTarget airlineoverridetarget)
        {
            return objairlineoverridetarget.AddAirlineOverrideTarget(airlineoverridetarget);
        }
        [HttpGet]
        [Route("api/AirlineOverrideTarget/{id}")]
        public AirlineOverrideTarget Details(int id)
        {
            return objairlineoverridetarget.GetAirlineOverrideTargetData(id);
        }
    }
}
