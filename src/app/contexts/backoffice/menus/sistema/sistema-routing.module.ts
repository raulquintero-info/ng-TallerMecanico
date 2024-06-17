import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/app/core/guards/admin.guard';
import { EmployeesFormComponent } from './employees/employees-form/employees-form.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'usuarios', component: UsersListComponent, canActivate: [adminGuard] },
      { path: 'usuarios-editar/:id', component: UsersFormComponent, canActivate: [adminGuard] },
      { path: 'usuarios-nuevo/:id', component: UsersFormComponent, canActivate: [adminGuard] },
      { path: 'empleados', component: EmployeesListComponent, canActivate: [adminGuard] },
      { path: 'empleados-form/:id', component: EmployeesFormComponent, canActivate: [adminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SistemaRoutingModule { }
