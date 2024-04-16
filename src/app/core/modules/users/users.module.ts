import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MUsersListComponent } from './m-users-list/m-users-list.component';
import { MUsersFormComponent } from './m-users-form/m-users-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MUsersListComponent,
    MUsersFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    MUsersListComponent,
    MUsersFormComponent
  ]
})
export class UsersModule { }
