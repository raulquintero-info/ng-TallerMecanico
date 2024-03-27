import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MRolesListComponent } from './m-roles-list/m-roles-list.component';
import { ToastModule } from '../toast/toast.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MRolesListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
  ],
  exports: [
    MRolesListComponent,
  ]
})
export class RolesModule { }
