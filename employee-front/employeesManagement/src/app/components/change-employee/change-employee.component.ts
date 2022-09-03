import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeInterface } from 'src/app/interfaces/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-change-employee',
  templateUrl: './change-employee.component.html',
  styleUrls: ['./change-employee.component.scss']
})
export class ChangeEmployeeComponent implements OnInit {

  editFormEmployee = this.fb.group({
    id:[''],
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

  constructor( private fb : FormBuilder,private route: ActivatedRoute,private employeeService: EmployeeService,
    private router: Router) { }

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
    this.editFormEmployee.patchValue({
      id: this.employeeDetails.id
    })
    this.employeeService.editEmployee(this.employeeDetails.id,this.editFormEmployee.value).subscribe(employee =>{
      this.router.navigate(['/'])

    })
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.employeeDetails.id).subscribe(employee =>{
      this.router.navigate(['/'])

    })
  }
}
