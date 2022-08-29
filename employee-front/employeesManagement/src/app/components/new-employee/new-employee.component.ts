import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addEmployee(){
    console.log(this.newFormEmployee.value)
  }
}
