using Data;
using Logic.Generales;
using Logic.VM;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Logic
{
    public class InscripcionLogic
    {
        private readonly UniversidadContext _context;
        public InscripcionLogic(UniversidadContext context)
        {
            _context = context;
        }

        public Inscripciones registrar(Inscripciones inscripcion) {

            var yaInscripto = _context.Inscripciones.Any(i => i.CursoId == inscripcion.CursoId &&
                                                              (i.EstadoId == EstadosEnum.Inscripto || i.EstadoId == EstadosEnum.Regular) &&
                                                              i.AlumnoId == inscripcion.AlumnoId);
            if (!yaInscripto)
            {
                _context.Inscripciones.Add(inscripcion);
                _context.SaveChanges();
                return inscripcion;
            }

            return null;
        }

        public List<EstadoAcademico> verEstado(int idA)
        {

            var todos = _context.Inscripciones.Include(i => i.Curso).Include(i => i.Estado).Where(i => i.AlumnoId == idA).Select(i => new EstadoAcademico()
            {
                Asignatura = i.Curso.Asignatura,
                FechaInscripcion = i.FechaInscripcion,
                Estado = i.Estado.Descripcion,
                Docente = i.Curso.Docente
            }).ToList();

            return todos;

        }

        public List<AlumnoInscripto> verInscriptosACurso(int idC)
        {
            return _context.Inscripciones.Include(i => i.Alumno).Where(i => i.CursoId == idC &&
                                                                            i.EstadoId == EstadosEnum.Inscripto).Select(s => new AlumnoInscripto()
                                                                                                                             {
                                                                                                                                 Legajo = s.Alumno.Legajo,
                                                                                                                                 Nombre = s.Alumno.Nombre,
                                                                                                                                 Edad = s.Alumno.Edad,
                                                                                                                                 FechaNacimiento = s.Alumno.FechaNacimiento
                                                                                                                             }).ToList();
        }

    }
}
