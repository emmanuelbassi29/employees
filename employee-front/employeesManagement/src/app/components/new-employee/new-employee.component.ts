import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { employeeInterface } from 'src/app/interfaces/employee.interface';
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
  constructor(private fb: FormBuilder,private employeeService: EmployeeService,private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(){
    console.log(this.newFormEmployee.value)
       this.employeeService.addEmployee(this.newFormEmployee.value).subscribe(employee => {
        this.router.navigate(['/'])
      })
  }


}
