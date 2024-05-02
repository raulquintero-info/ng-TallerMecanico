import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEmployeesListComponent } from './m-employees-list/m-employees-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MEmployeeFormComponent } from './m-employee-form/m-employee-form.component';
import { EmployeesFormComponent } from 'src/app/contexts/backoffice/pages/sistema/employees/employees-form/employees-form.component';



@NgModule({
  declarations: [
    MEmployeesListComponent,
    MEmployeeFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MEmployeesListComponent,
    MEmployeeFormComponent
  ]
})
export class EmployeesModule { }
