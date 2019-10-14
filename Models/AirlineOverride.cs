using System;
using System.Collections.Generic;

namespace Airline.Models
{
    public partial class AirlineOverride
    {
        public AirlineOverride()
        {
            AirlineOverrideTarget = new HashSet<AirlineOverrideTarget>();
        }

        public Guid AirlineOverrideId { get; set; }
        public string Code { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool Groupable { get; set; }
        public decimal MinRevenue { get; set; }
        public decimal GuaranteedRoi { get; set; }
        public decimal PayingFrom { get; set; }
        public bool SelfTicketing { get; set; }
        public bool Active { get; set; }

        public ICollection<AirlineOverrideTarget> AirlineOverrideTarget { get; set; }
    }
}
