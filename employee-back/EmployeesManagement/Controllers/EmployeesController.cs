using EmployeesManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeesManagement.Controllers
{
    [ApiController]
    [Route("employees")]
    public class EmployeesController : Controller
    {
        public List<Employee> Employees = new List<Employee> { new Employee() };

        [HttpGet]
        public IActionResult GetEmployees()
        {
            return Ok(Employees);
        }

        [Route("id:Guid")]
        public IActionResult GetEmployee([FromRoute] Guid id)
        {
            Employee employee = Employees.Find(x => x.Id == id);

            if(employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }
    }
}
