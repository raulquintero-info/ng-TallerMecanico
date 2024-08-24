import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MModelosListComponent } from './m-modelos-list/m-modelos-list.component';
import { RouterModule } from '@angular/router';
import { MModelosFormComponent } from './m-modelos-form/m-modelos-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MModelosListComponent,
    MModelosFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports:[
    MModelosListComponent,
    MModelosFormComponent,
  ]
})
export class ModelosModule { }
