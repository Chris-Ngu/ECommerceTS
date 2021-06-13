using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;


namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet]

        // Does not list out everything as Key-value, just json values
        // public JsonResult test()
        // {
        //     return new JsonResult("Test is working :)");
        // }
        public ActionResult test()
        {
            return Ok(new JsonResult("Test"));
        }
    }
}