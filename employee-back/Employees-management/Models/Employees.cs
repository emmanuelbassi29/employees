using System.ComponentModel.DataAnnotations.Schema;

namespace Employees_management.Models
{
    public class Employees
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public long Phone { get; set; }

        public long Salary { get; set; }

        public string Department { get; set; }

        public Employees(Guid id, string name, string email, int phone, int salary, string department)
        {
            Id = id;
            Name = name;
            Email = email;
            Phone = phone;
            Salary = salary;
            Department = department;
        }

        public Employees()
        {
        }
    }
}
