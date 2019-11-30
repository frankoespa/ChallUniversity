using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data
{
    public partial class Cursos
    {
        public Cursos()
        {
            Inscripciones = new HashSet<Inscripciones>();
        }

        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Asignatura { get; set; }
        [Column("Capacidad_Max")]
        public int CapacidadMax { get; set; }
        [Required]
        [StringLength(50)]
        public string Docente { get; set; }

        [InverseProperty("Curso")]
        public virtual ICollection<Inscripciones> Inscripciones { get; set; }
    }
}
