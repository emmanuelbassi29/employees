namespace EmployeesManagement.Models
{
    public class Employee
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public long Phone { get; set; }

        public long Salary { get; set; }

        public string Department { get; set; }

        public Employee(Guid id, string name, string email, long phone, long salary, string department)
        {
            Id = id;
            Name = name;
            Email = email;
            Phone = phone;
            Salary = salary;
            Department = department;
        }

        public Employee()
        {
        }
    }
}
