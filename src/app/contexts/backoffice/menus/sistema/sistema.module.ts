import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SistemaRoutingModule } from './sistema-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmployeesModule } from 'src/app/core/modules/employees/employees.module';
import { UsersModule } from 'src/app/core/modules/users/users.module';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';


@NgModule({
  declarations: [
    EmployeesFormComponent,
    EmployeesListComponent,
    UsersFormComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    SistemaRoutingModule,
    EmployeesModule,
    UsersModule,
    SharedModule
  ]
})
export class SistemaModule { }
