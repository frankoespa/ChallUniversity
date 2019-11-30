using Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Logic
{
    public class CursoLogic
    {
        private readonly UniversidadContext _context;
        public CursoLogic(UniversidadContext context)
        {
            _context = context;
        }
        public List<Cursos> verTodosNoInscriptos(int idAlumno)
        {
            return this._context.Cursos.FromSqlInterpolated($"EXECUTE dbo.obtenerCursosNoInscriptos {idAlumno}").ToList();
        }

        public List<Cursos> verTodosInscriptos(int idAlumno)
        {
            return this._context.Cursos.FromSqlInterpolated($"EXECUTE dbo.obtenerCursosInscriptos {idAlumno}").ToList();
        }

        public List<Cursos> verTodos()
        {
            return this._context.Cursos.ToList();
        }
    }
}
