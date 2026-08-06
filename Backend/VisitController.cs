using Microsoft.AspNetCore.Mvc;
using System;

namespace SahaZiyaretTakip.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VisitController : ControllerBase
    {
        private readonly VisitService _visitService;

        public VisitController()
        {
            _visitService = new VisitService();
        }

        [HttpPost("create")]
        public IActionResult CreateVisit([FromBody] Visit visit)
        {
            try
            {
                _visitService.CreateVisit(visit);
                return Ok(new { message = "Ziyaret başarıyla oluşturuldu.", data = visit });
            }
            catch (ArgumentException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
            catch (Exception)
            {
                return StatusCode(500, "Sunucu tarafında bir hata oluştu.");
            }
        }
    }
}
