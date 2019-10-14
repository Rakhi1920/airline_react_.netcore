using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Airline.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Airline.Controllers
{
    
    public class AirlineOverrideController : Controller
    {
        AirlineDataAccessLayer objairlineoverride = new AirlineDataAccessLayer();
        [HttpGet]
        [Route("api/AirlineOverride/Index")]
        public IEnumerable<AirlineOverride> Index()
        {
            return objairlineoverride.GetAllAirlineOverride();
        }
        [HttpPost]
        [Route("api/AirlineOverride/Create")]
        public int Create(AirlineOverride airlineoverride)
        {
            return objairlineoverride.AddAirlineOverride(airlineoverride);
        }
        [HttpGet]
        [Route("api/AirlineOverride/Edit/{id}")]
        public AirlineOverride Details(int id)
        {
            return objairlineoverride.GetAirlineOverrideData(id);
        }
    }
}
