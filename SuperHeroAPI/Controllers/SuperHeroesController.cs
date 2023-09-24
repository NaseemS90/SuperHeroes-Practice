using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SuperHeroAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace SuperHeroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroesController : ControllerBase
    {
        private readonly AppDataContext _context;

        public SuperHeroesController(AppDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<SuperHeroModel>>> GetSuperHeroes()
        {
            var result = await _context.SuperHeroes.ToListAsync();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<List<SuperHeroModel>>> AddSuperHeroes(SuperHeroModel hero)
        {
            _context.SuperHeroes.Add(hero);
            _context.SaveChanges();
            var result = await _context.SuperHeroes.ToListAsync();
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<SuperHeroModel>>> DeleteSuperHeroes(int id)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(id);
            if (dbHero == null)
            {
                return BadRequest("Your requested heros is not found");
            }
            _context.SuperHeroes.Remove(dbHero);
            _context.SaveChanges();
            var result = await _context.SuperHeroes.ToListAsync();
            return Ok(result);
        }

        [HttpPut]
        public async Task<ActionResult<List<SuperHeroModel>>> UpdateSuperHeroes(SuperHeroModel hero)
        {
            var dbHero = await _context.SuperHeroes.FindAsync(hero.Id);
            if (dbHero == null)
            {
                return BadRequest("Your requested heros is not found");
            }

            dbHero.FirstName = hero.FirstName;
            dbHero.LastName = hero.LastName;
            dbHero.Name= hero.Name;
            dbHero.Place = hero.Place;

            _context.SaveChanges();
            var result = await _context.SuperHeroes.ToListAsync();
            return Ok(result);
        }
    }
}
