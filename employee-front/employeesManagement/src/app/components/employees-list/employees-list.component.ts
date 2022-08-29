import { employeeInterface } from '../../interfaces/employee.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees:employeeInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
