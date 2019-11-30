using Data;
using Logic;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace UniversityAdmin.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CursosController : ControllerBase
    {
        private readonly CursoLogic _cursoLogic;

        public CursosController(CursoLogic cursoLogic)
        {
            this._cursoLogic = cursoLogic;
        }

        // GET: api/CursosNoInscriptos
        [HttpGet("{idA}")]
        public ActionResult<List<Cursos>> GetCursosNoInscriptos(int idA)
        {
            return _cursoLogic.verTodosNoInscriptos(idA);
        }

       [HttpGet("{idA}")]
        public ActionResult<List<Cursos>> GetCursosInscriptos(int idA)
        {
            return _cursoLogic.verTodosInscriptos(idA);
        }

        [HttpGet]
        public ActionResult<List<Cursos>> GetAllCursos()
        {
            return _cursoLogic.verTodos();
        }
    }
}
