using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using Logic;

namespace UniversityAdmin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumnosController : ControllerBase
    {
        private readonly AlumnoLogic _alumnosLogic;

        public AlumnosController(AlumnoLogic alumnoLogic)
        {
            _alumnosLogic = alumnoLogic;
        }

        // GET: api/Alumnos
        [HttpGet]
        public ActionResult<List<Alumnos>> GetAlumnos()
        {
            return this._alumnosLogic.verTodos();
        }

        // GET: api/Alumnos/5
        [HttpGet("{id}")]
        public ActionResult<Alumnos> GetAlumnos(int id)
        {
            var alumno = this._alumnosLogic.verAlumno(id);

            if (alumno == null)
            {
                return NotFound();
            }

            return alumno;
        }

        // PUT: api/Alumnos
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        public ActionResult<Alumnos> PutAlumnos(Alumnos alumno)
        {

            return this._alumnosLogic.editarAlumno(alumno);
        }

        // POST: api/Alumnos
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public ActionResult<Alumnos> PostAlumnos(Alumnos alumno)
        {
            this._alumnosLogic.registrarAlumno(alumno);

            return CreatedAtAction("GetAlumnos", new { id = alumno.Id }, alumno);
        }

        // DELETE: api/Alumnos/5
        //[HttpDelete("{id}")]
        //public async Task<ActionResult<Alumnos>> DeleteAlumnos(int id)
        //{
        //    var alumnos = await _context.Alumnos.FindAsync(id);
        //    if (alumnos == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Alumnos.Remove(alumnos);
        //    await _context.SaveChangesAsync();

        //    return alumnos;
        //}

    }
}
