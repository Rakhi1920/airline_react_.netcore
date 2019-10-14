using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Airline.Models
{
    public class AirlineDataAccessLayer
    {
        AirlineContext db = new AirlineContext();

        public IEnumerable<AirlineOverride> GetAllAirlineOverride()
        {
            try
            {
                return db.AirlineOverride.ToList();
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<AirlineOverrideTarget> GetAllAirlineOverrideTarget()
        {
            try
            {
                return db.AirlineOverrideTarget.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new Airlineoverride record
        public int AddAirlineOverride(AirlineOverride airlineoverride)
        {
            try
            {
                db.AirlineOverride.Add(airlineoverride);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Add new AirlineoverrideTarget record
        public int AddAirlineOverrideTarget(AirlineOverrideTarget airlineoverridetarget)
        {
            try
            {
                db.AirlineOverrideTarget.Add(airlineoverridetarget);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particular AirlineOverride
        public int UpdateAirlineOverride(AirlineOverride airlineoverride)
        {
            try
            {
                db.Entry(airlineoverride).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular AirlineOverride
        public AirlineOverride GetAirlineOverrideData(int id)
        {
            try
            {
                AirlineOverride airlineoverride = db.AirlineOverride.Find(id);
                return airlineoverride;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular AirlineOverrideTarget
        public AirlineOverrideTarget GetAirlineOverrideTargetData(int id)
        {
            try
            {
                AirlineOverrideTarget airlineoverridetarget = db.AirlineOverrideTarget.Find(id);
                return airlineoverridetarget;
            }
            catch
            {
                throw;
            }
        }

    }
}
