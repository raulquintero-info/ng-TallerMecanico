import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEmployeesListComponent } from './m-employees-list/m-employees-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MEmployeesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MEmployeesListComponent
  ]
})
export class EmployeesModule { }
