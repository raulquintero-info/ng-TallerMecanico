import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MModelosListComponent } from './m-modelos-list/m-modelos-list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MModelosListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    MModelosListComponent,
  ]
})
export class ModelosModule { }
