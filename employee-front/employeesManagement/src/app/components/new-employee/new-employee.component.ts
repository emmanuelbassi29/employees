import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit {



  newFormEmployee = this.fb.group({
    name: [''],
    email: [''],
    phone: [0],
    salary: [0],
    department: ['']
  })
  constructor(private fb: FormBuilder,private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  addEmployee(){
    console.log(this.newFormEmployee.value)
       this.employeeService.addEmployee(this.newFormEmployee.value).subscribe(employee => {
        console.log(employee)
       })
  }
}
