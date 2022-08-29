using Microsoft.EntityFrameworkCore;

namespace Employees_management.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options) 
        {
        
        }

         
    }
}
