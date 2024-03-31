import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MMarcasListComponent } from './m-marcas-list/m-marcas-list.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from '../toast/toast.module';



@NgModule({
  declarations: [
    MMarcasListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule
  ],
  exports:[
    MMarcasListComponent

  ]
})
export class MarcasModule { }
