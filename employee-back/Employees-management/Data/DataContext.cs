using Microsoft.EntityFrameworkCore;
using Employees_management.Models;

namespace Employees_management.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
        
        }

        public DbSet<Employees>? Employees { get; set; }

         
    }
}
