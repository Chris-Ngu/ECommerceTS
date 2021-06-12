using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class KeyboardContext : DbContext
    {
        public KeyboardContext(DbContextOptions<KeyboardContext> options) : base(options) { }

        public DbSet<Keyboard> keyboards { get; set; }
    }
}