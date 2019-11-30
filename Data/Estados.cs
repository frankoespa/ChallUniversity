using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Data
{
    public partial class Estados
    {
        public Estados()
        {
            Inscripciones = new HashSet<Inscripciones>();
        }

        [Key]
        [Column("ID")]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Descripcion { get; set; }

        [InverseProperty("Estado")]
        public virtual ICollection<Inscripciones> Inscripciones { get; set; }
    }
}
