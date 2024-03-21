import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MServicesListComponent } from './m-services-list/m-services-list.component';



@NgModule({
  declarations: [
    MServicesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MServicesListComponent
  ]
})
export class ServicesModule { }
