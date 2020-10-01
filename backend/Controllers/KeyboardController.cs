using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using KeebClack.Models;

namespace KeebClack.Controllers
{
    [Route("api/[controller]")]
    public class KeyboardController : Controller
    {
        public KeyboardController(IKeyboardRepository keyboardItems)
        {
            KeyboardItems = keyboardItems;
        }
        public IKeyboardRepository KeyboardItems { get; set; }

        public IEnumerable<KeyboardModel> GetAll()
        {
            return KeyboardItems.GetAll();
        }

        [HttpGet("{id}", Name = "GetKeyboard")]
        public IActionResult GetById(string id)
        {
            var keyboard = KeyboardItems.Find(id);
            if (keyboard == null)
            {
                return NotFound();
            }
            return new ObjectResult(keyboard);
        }
    }
}