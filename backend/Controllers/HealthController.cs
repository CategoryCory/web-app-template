using Microsoft.AspNetCore.Mvc;

namespace WebAppBackendTemplate.Controllers;

[Route("api/[controller]")]
[ApiController]
public class HealthController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult Ready()
    {
        return Ok(new { msg = "API is running" });
    }
}
