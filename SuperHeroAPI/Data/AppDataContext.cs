using Microsoft.EntityFrameworkCore;

namespace SuperHeroAPI.Data
{
    public class AppDataContext : DbContext
    {
        //public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options) { }

        public DbSet<SuperHeroModel> SuperHeroes { get; set; }
    }
}