import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from '../toast/toast.module';
import { MTiposMotorListComponent } from './m-tipos-motor-list/m-tipos-motor-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MTiposMotorListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule
  ],
  exports: [
    MTiposMotorListComponent
  ]
})
export class TiposMotorModule { }
