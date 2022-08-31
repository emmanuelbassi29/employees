import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { employeeInterface } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-change-employee',
  templateUrl: './change-employee.component.html',
  styleUrls: ['./change-employee.component.scss']
})
export class ChangeEmployeeComponent implements OnInit {

  editFormEmployee = this.fb.group({
    name: [''],
    email: [''],
    phone: [0],
    salary: [0],
    department: ['']
  })

  employeeDetails: employeeInterface = {
    id: "",
  name: "",
  email: "",
  phone: 0,
  salary: 0,
  department: ""
  }

  constructor( private fb : FormBuilder,private route: ActivatedRoute,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params: any) => {
       const Id = params.get('id');
       if (Id){
        this.employeeService.getEmployee(Id).subscribe(employee =>{
          this.employeeDetails = employee;
        })
       }
      }
    })
  }


  editEmployee(){

  }

  deleteEmployee(){

  }
}
