import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeEmployeeComponent } from './components/change-employee/change-employee.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { NewEmployeeComponent } from './components/new-employee/new-employee.component';

const routes: Routes = [
  {
    path: '',
    component:EmployeesListComponent
  },
  {
    path:'new',
    component:NewEmployeeComponent
  },
  {
    path:'edit/:id',
    component:ChangeEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
