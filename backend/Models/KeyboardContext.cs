using Microsoft.EntityFrameworkCore;

namespace KeebClack.Models
{
    public class KeyboardContext : DbContext
    {
        public KeyboardContext(DbContextOptions<KeyboardContext> options) : base(options)
        {

        }

        public DbSet<KeyboardModel> KeyboardItems { get; set; }
    }
}