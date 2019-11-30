using Data;
using Logic;
using Logic.VM;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace UniversityAdmin.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class InscripcionesController : ControllerBase
    {
        private readonly InscripcionLogic _inscripcionLogic;

        public InscripcionesController(InscripcionLogic inscripcionLogic)
        {
            _inscripcionLogic = inscripcionLogic;
        }

        // GET: api/Inscripciones
        [HttpGet("{idA}")]
        public ActionResult<List<EstadoAcademico>> GetEstadoAcademico(int idA)
        {
            return this._inscripcionLogic.verEstado(idA);
        }

        // GET: api/Inscripciones
        [HttpGet("{idC}")]
        public ActionResult<List<AlumnoInscripto>> GetInscriptosACurso(int idC)
        {
            return _inscripcionLogic.verInscriptosACurso(idC);
        }


        // POST: api/Inscripciones
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public ActionResult<Inscripciones> PostInscripciones(Inscripciones inscripcion)
        {
            var inscripcionOk = this._inscripcionLogic.registrar(inscripcion);

            if (inscripcionOk != null)
            {
                return CreatedAtAction("GetInscripciones", new { id = inscripcion.Id }, inscripcion);
            }

            return null;


        }
    }
}
