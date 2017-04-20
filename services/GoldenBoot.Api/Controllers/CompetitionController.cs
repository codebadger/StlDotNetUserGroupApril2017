using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using GoldenBoot.Api.Models;

namespace GoldenBoot.Api.Controllers
{
    [Route("api/[controller]")]
    public class CompetitionController : Controller
    {
        private ICompetitionRepository _repository;

        public CompetitionController(ICompetitionRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [Route("{code}")]
        public ActionResult GetCompetition(string code)
        {
            var competition = _repository.Get(code);

            if (competition == null)
            {
                var error = $"Could not find competition with code: {code}";
                return new NotFoundObjectResult(error);
            }

            return Json(competition);
        }
    }
}