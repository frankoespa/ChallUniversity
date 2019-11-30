
using Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Logic
{
    public class AlumnoLogic
    {
        private readonly UniversidadContext _context;
        public AlumnoLogic(UniversidadContext context)
        {
            _context = context;
        }

        public Alumnos registrarAlumno(Alumnos alumno)
        {
            _context.Alumnos.Add(alumno);
            _context.SaveChanges();
            return alumno;
        }

        public List<Alumnos> verTodos()
        {
            return this._context.Alumnos.ToList();
        }

        public Alumnos verAlumno(int id)
        {
            var alumno = this._context.Alumnos.Find(id);

            return alumno;
        }

        public Alumnos editarAlumno(Alumnos alumno)
        {
            var existe = this._context.Alumnos.Any(a => a.Id == alumno.Id);
            if (existe)
            {
                this._context.Update(alumno);
                _context.Entry(alumno).State = EntityState.Modified;
                _context.SaveChanges();
                return alumno;

            } else
            {
                return null;
            }
        }
        private bool AlumnosExists(int id)
        {
            return _context.Alumnos.Any(e => e.Id == id);
        }

    }
}
