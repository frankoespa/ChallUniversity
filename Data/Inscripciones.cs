using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data
{
    public partial class Inscripciones
    {
        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Column("AlumnoID")]
        public int AlumnoId { get; set; }
        [Column("CursoID")]
        public int CursoId { get; set; }
        [Column(TypeName = "date")]
        public DateTime FechaInscripcion { get; set; }
        [Column("EstadoID")]
        public int EstadoId { get; set; }

        [ForeignKey(nameof(AlumnoId))]
        [InverseProperty(nameof(Alumnos.Inscripciones))]
        public virtual Alumnos Alumno { get; set; }
        [ForeignKey(nameof(CursoId))]
        [InverseProperty(nameof(Cursos.Inscripciones))]
        public virtual Cursos Curso { get; set; }
        [ForeignKey(nameof(EstadoId))]
        [InverseProperty(nameof(Estados.Inscripciones))]
        public virtual Estados Estado { get; set; }
    }
}
