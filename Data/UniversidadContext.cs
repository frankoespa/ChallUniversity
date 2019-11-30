using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Data
{
    public partial class UniversidadContext : DbContext
    {
        public UniversidadContext()
        {
        }

        public UniversidadContext(DbContextOptions<UniversidadContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Alumnos> Alumnos { get; set; }
        public virtual DbSet<Cursos> Cursos { get; set; }
        public virtual DbSet<Estados> Estados { get; set; }
        public virtual DbSet<Inscripciones> Inscripciones { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Alumnos>(entity =>
            {
                entity.Property(e => e.Nombre).IsUnicode(false);
            });

            modelBuilder.Entity<Cursos>(entity =>
            {
                entity.Property(e => e.Asignatura).IsUnicode(false);

                entity.Property(e => e.Docente).IsUnicode(false);
            });

            modelBuilder.Entity<Estados>(entity =>
            {
                entity.Property(e => e.Descripcion).IsUnicode(false);
            });

            modelBuilder.Entity<Inscripciones>(entity =>
            {
                entity.Property(e => e.EstadoId).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.Alumno)
                    .WithMany(p => p.Inscripciones)
                    .HasForeignKey(d => d.AlumnoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inscripciones_Alumnos");

                entity.HasOne(d => d.Curso)
                    .WithMany(p => p.Inscripciones)
                    .HasForeignKey(d => d.CursoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inscripciones_Cursos");

                entity.HasOne(d => d.Estado)
                    .WithMany(p => p.Inscripciones)
                    .HasForeignKey(d => d.EstadoId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inscripciones_Estados");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
