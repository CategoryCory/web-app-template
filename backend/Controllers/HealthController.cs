using Microsoft.AspNetCore.Mvc;

namespace WebAppBackendTemplate.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class HealthController : ControllerBase
{
    [HttpGet]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult Ready()
    {
        return Ok(new { status = "healthy", msg = "API is running" });
    }
}
