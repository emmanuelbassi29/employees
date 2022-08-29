import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeInterface } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string = 'https://localhost:7251/employees/';
  constructor(private http : HttpClient) { }

  addEmployee(employee : any): Observable<employeeInterface>{

    return this.http.post<employeeInterface>(this.url + "new" ,employee);
  }

}
