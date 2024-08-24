import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MMarcasListComponent } from './m-marcas-list/m-marcas-list.component';
import { RouterModule } from '@angular/router';
import { ToastModule } from '../toast/toast.module';
import { MMarcasFormComponent } from './m-marcas-form/m-marcas-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MMarcasListComponent,
    MMarcasFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToastModule
  ],
  exports:[
    MMarcasListComponent,
    MMarcasFormComponent,
  ]
})
export class MarcasModule { }
