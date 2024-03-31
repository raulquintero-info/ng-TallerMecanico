import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MEstatusServicioListComponent } from './m-estatus-servicio-list/m-estatus-servicio-list.component';
import { MEstatusServicioFormComponent } from './m-estatus-servicio-form/m-estatus-servicio-form.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from '../toast/toast.module';



@NgModule({
  declarations: [
    MEstatusServicioListComponent,
    MEstatusServicioFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule
  ],
  exports: [
    MEstatusServicioListComponent,
  ]
})
export class EstatusServicioModule { }
