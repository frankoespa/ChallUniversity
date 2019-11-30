using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data
{
    public partial class Alumnos
    {
        public Alumnos()
        {
            Inscripciones = new HashSet<Inscripciones>();
        }

        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Nombre { get; set; }
        public int Legajo { get; set; }
        public int Edad { get; set; }
        [Column(TypeName = "date")]
        public DateTime FechaNacimiento { get; set; }

        [InverseProperty("Alumno")]
        public virtual ICollection<Inscripciones> Inscripciones { get; set; }
    }
}
