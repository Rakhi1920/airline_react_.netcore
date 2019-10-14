using System;
using System.Collections.Generic;

namespace Airline.Models
{
    public partial class AirlineOverrideTarget
    {
        public Guid AirlineOverrideTargetId { get; set; }
        public Guid AirlineOverrideId { get; set; }
        public int Sequence { get; set; }
        public decimal Percent { get; set; }
        public decimal Max { get; set; }
        public decimal Roi { get; set; }
        public decimal MaxRoi { get; set; }
        public decimal HardMaxRoi { get; set; }

        public AirlineOverride AirlineOverride { get; set; }
    }
}
