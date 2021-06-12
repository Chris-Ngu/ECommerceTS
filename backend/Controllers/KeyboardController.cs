using System;
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
    public class KeyboardController : ControllerBase
    {
        private readonly KeyboardContext _context;

        public KeyboardController(KeyboardContext context)
        {
            _context = context;
        }

        // GET: api/Keyboard
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Keyboard>>> Getkeyboards()
        {
            return await _context.keyboards.ToListAsync();
        }

        // GET: api/Keyboard/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Keyboard>> GetKeyboard(long id)
        {
            var keyboard = await _context.keyboards.FindAsync(id);

            if (keyboard == null)
            {
                return NotFound();
            }

            return keyboard;
        }

        // PUT: api/Keyboard/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKeyboard(long id, Keyboard keyboard)
        {
            if (id != keyboard.id)
            {
                return BadRequest();
            }

            _context.Entry(keyboard).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KeyboardExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Keyboard
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Keyboard>> PostKeyboard(Keyboard keyboard)
        {
            _context.keyboards.Add(keyboard);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetKeyboard", new { id = keyboard.id }, keyboard);
        }

        // DELETE: api/Keyboard/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteKeyboard(long id)
        {
            var keyboard = await _context.keyboards.FindAsync(id);
            if (keyboard == null)
            {
                return NotFound();
            }

            _context.keyboards.Remove(keyboard);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool KeyboardExists(long id)
        {
            return _context.keyboards.Any(e => e.id == id);
        }
    }
}
