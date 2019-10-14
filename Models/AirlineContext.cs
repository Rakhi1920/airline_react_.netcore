using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Airline.Models
{
    public partial class AirlineContext : DbContext
    {
        public AirlineContext()
        {
        }

        public AirlineContext(DbContextOptions<AirlineContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AirlineOverride> AirlineOverride { get; set; }
        public virtual DbSet<AirlineOverrideTarget> AirlineOverrideTarget { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=DESKTOP-7Q83API;Database=Airline;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AirlineOverride>(entity =>
            {
                entity.Property(e => e.AirlineOverrideId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.Code)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.GuaranteedRoi)
                    .HasColumnName("GuaranteedROI")
                    .HasColumnType("decimal(14, 2)");

                entity.Property(e => e.MinRevenue).HasColumnType("decimal(14, 2)");

                entity.Property(e => e.PayingFrom).HasColumnType("decimal(14, 2)");

                entity.Property(e => e.StartDate).HasColumnType("date");
            });

            modelBuilder.Entity<AirlineOverrideTarget>(entity =>
            {
                entity.Property(e => e.AirlineOverrideTargetId).HasDefaultValueSql("(newid())");

                entity.Property(e => e.HardMaxRoi)
                    .HasColumnName("HardMaxROI")
                    .HasColumnType("decimal(6, 2)");

                entity.Property(e => e.Max).HasColumnType("decimal(6, 2)");

                entity.Property(e => e.MaxRoi)
                    .HasColumnName("MaxROI")
                    .HasColumnType("decimal(6, 2)");

                entity.Property(e => e.Percent).HasColumnType("decimal(6, 2)");

                entity.Property(e => e.Roi)
                    .HasColumnName("ROI")
                    .HasColumnType("decimal(6, 2)");

                entity.HasOne(d => d.AirlineOverride)
                    .WithMany(p => p.AirlineOverrideTarget)
                    .HasForeignKey(d => d.AirlineOverrideId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AirlineOverrideTarget_AirlineOverride");
            });
        }
    }
}
